/* ============================================================
   GOOGLE SHEETS CONFIG (OpenSheet)
============================================================ */
const SHEET_ID = "1w1xw3igo03UEw159KDTXPUgLg1Pg9dNKRDDl3ZdxmuM"; // <-- REPLACE
const BASE_URL = `https://opensheet.elk.sh/${SHEET_ID}`;

/* ============================================================
   LOAD ANY SHEET
============================================================ */
async function loadSheet(sheetName) {
    const url = `${BASE_URL}/${sheetName}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to load sheet: " + sheetName);
    return await res.json();
}

/* ============================================================
   LOAD ALL DATA FROM GOOGLE SHEETS
============================================================ */
async function loadAllData() {
    const [
        locations,
        kitchens,
        mealPlans,
        meals,
        kitchenMealPlans
    ] = await Promise.all([
        loadSheet("locations"),
        loadSheet("kitchens"),
        loadSheet("meal_plans"),
        loadSheet("meals"),
        loadSheet("kitchen_meal_plans")
    ]);

    /* ===== Convert all IDs to numbers ===== */
    locations.forEach(l => l.location_id = Number(l.location_id));
    kitchens.forEach(k => {
        k.kitchen_id = Number(k.kitchen_id);
        k.location_id = Number(k.location_id);
    });
    mealPlans.forEach(p => p.plan_id = Number(p.plan_id));
    meals.forEach(m => {
        m.meal_id = Number(m.meal_id);
        m.kitchen_id = Number(m.kitchen_id);
        m.plan_id = Number(m.plan_id);
        m.price = Number(m.price);
    });
    kitchenMealPlans.forEach(kmp => {
        kmp.kitchen_id = Number(kmp.kitchen_id);
        kmp.plan_id = Number(kmp.plan_id);
        kmp.enabled = String(kmp.enabled).toLowerCase() === "true";
    });

    /* ===== Build lookup maps ===== */
    const kitchenById = {};
    const kitchensByLocation = {};
    kitchens.forEach(k => {
        kitchenById[k.kitchen_id] = k;
        if (!kitchensByLocation[k.location_id]) kitchensByLocation[k.location_id] = [];
        kitchensByLocation[k.location_id].push(k);
    });

    const planById = {};
    mealPlans.forEach(p => planById[p.plan_id] = p);

    const mealsByKitchenPlan = {};
    meals.forEach(m => {
        if (!mealsByKitchenPlan[m.kitchen_id]) mealsByKitchenPlan[m.kitchen_id] = {};
        if (!mealsByKitchenPlan[m.kitchen_id][m.plan_id]) mealsByKitchenPlan[m.kitchen_id][m.plan_id] = [];
        mealsByKitchenPlan[m.kitchen_id][m.plan_id].push(m);
    });

    // which plans each kitchen offers
    const kitchenPlans = {};
    kitchenMealPlans.forEach(row => {
        if (!row.enabled) return;
        if (!kitchenPlans[row.kitchen_id]) kitchenPlans[row.kitchen_id] = [];
        kitchenPlans[row.kitchen_id].push(row.plan_id);
    });

    /* Store everything globally */
    window.APP = {
        locations,
        kitchens,
        mealPlans,
        meals,
        kitchenMealPlans,
        kitchenById,
        kitchensByLocation,
        planById,
        mealsByKitchenPlan,
        kitchenPlans
    };

    return window.APP;
}

/* ============================================================
   PAGE INITIALIZATION ROUTER
============================================================ */
loadAllData().then(() => {
    const path = location.pathname;
    if (path.includes("index") || path.endsWith("/")) initLocationPage();
    if (path.includes("kitchens.html")) initKitchensPage();
    if (path.includes("categories.html")) initCategoriesPage();
    if (path.includes("meal-options.html")) initMealsPage();
    if (path.includes("subscribe.html")) initSubscribePage();
    if (path.includes("payment.html")) initPaymentPage();
    if (path.includes("success.html")) initSuccessPage();
});

/* ============================================================
   1. LOCATION PAGE
============================================================ */
function initLocationPage() {
    const sel = document.getElementById("locationSelect");
    sel.innerHTML = `<option value="">-- Choose location --</option>`;

    APP.locations.forEach(l => {
        sel.innerHTML += `<option value="${l.location_id}">${l.location_name}</option>`;
    });

    document.getElementById("continueBtn").onclick = () => {
        const v = sel.value;
        if (!v) return alert("Please select a location");
        localStorage.setItem("location", v);
        window.location.href = "kitchens.html";
    };
}

/* ============================================================
   2. KITCHENS PAGE
============================================================ */
function initKitchensPage() {
    const locId = Number(localStorage.getItem("location"));
    const kitchens = APP.kitchensByLocation[locId] || [];

    const kitchensList = document.getElementById("kitchensList");
    const filterCategory = document.getElementById("filterCategory");
    const filterMealType = document.getElementById("filterMealType");
    const resetBtn = document.getElementById("resetFilters");

    /* load diet categories dynamically */
    APP.mealPlans.forEach(p => {
        filterCategory.innerHTML += `<option value="${p.plan_id}">${p.plan_name}</option>`;
    });

    function render(list) {
        kitchensList.innerHTML = "";
        if (!list.length) {
            kitchensList.innerHTML = `<p>No kitchens match filters.</p>`;
            return;
        }

        list.forEach(k => {
            const kid = k.kitchen_id;
            const plans = APP.kitchenPlans[kid] || [];
            const planLabels = plans.map(pid => APP.planById[pid].plan_name).join(", ");

            kitchensList.innerHTML += `
                <div class="card">
                    <img src="${k.image_url}">
                    <div>
                        <h3>${k.kitchen_name}</h3>
                        <p style="color:#666;">Categories: ${planLabels}</p>
                        <button onclick="selectKitchen(${kid})">View Meal Plans</button>
                    </div>
                </div>
            `;
        });
    }

    function applyFilters() {
        let result = [...kitchens];

        const catVal = Number(filterCategory.value);
        const mealVal = filterMealType.value;

        // filter by diet category
        if (catVal) {
            result = result.filter(k =>
                (APP.kitchenPlans[k.kitchen_id] || []).includes(catVal)
            );
        }

        // filter by meal type
        if (mealVal) {
            result = result.filter(k => {
                const kid = k.kitchen_id;
                const allMeals = APP.meals.filter(m => m.kitchen_id === kid);
                return allMeals.some(m => m.meal_type === mealVal);
            });
        }

        resetBtn.style.display = (catVal || mealVal) ? "block" : "none";
        render(result);
    }

    filterCategory.onchange = applyFilters;
    filterMealType.onchange = applyFilters;

    resetBtn.onclick = () => {
        filterCategory.value = "";
        filterMealType.value = "";
        resetBtn.style.display = "none";
        render(kitchens);
    };

    render(kitchens);
}

function selectKitchen(id) {
    localStorage.setItem("kitchenId", id);
    window.location.href = "categories.html";
}

/* ============================================================
   3. CATEGORIES PAGE
============================================================ */
function initCategoriesPage() {
    const kid = Number(localStorage.getItem("kitchenId"));
    const kitchen = APP.kitchenById[kid];
    const planIds = APP.kitchenPlans[kid] || [];

    const header = document.getElementById("kitchenHeader");
    const list = document.getElementById("categoriesList");

    header.innerHTML = `
        <div class="card">
            <img src="${kitchen.image_url}">
            <div>
                <h3>${kitchen.kitchen_name}</h3>
                <p>Select a diet category</p>
            </div>
        </div>
    `;

    list.innerHTML = "";
    planIds.forEach(pid => {
        const plan = APP.planById[pid];
        const meals = APP.mealsByKitchenPlan[kid][pid];

        list.innerHTML += `
            <div class="card">
                <img src="${meals[0].image_url}">
                <div>
                    <h3>${plan.plan_name}</h3>
                    <p style="color:#666;">Meals: ${meals.map(m => m.meal_type).join(", ")}</p>
                    <button onclick="selectCategory(${pid})">View Meals</button>
                </div>
            </div>
        `;
    });
}

function selectCategory(pid) {
    localStorage.setItem("planId", pid);
    window.location.href = "meal-options.html";
}

/* ============================================================
   4. MEALS PAGE
============================================================ */
function initMealsPage() {
    const kid = Number(localStorage.getItem("kitchenId"));
    const pid = Number(localStorage.getItem("planId"));

    const kitchen = APP.kitchenById[kid];
    const plan = APP.planById[pid];
    const meals = APP.mealsByKitchenPlan[kid][pid];

    const header = document.getElementById("mealHeader");
    const list = document.getElementById("mealsList");

    header.innerHTML = `
        <div class="card">
            <img src="${kitchen.image_url}">
            <div>
                <h3>${kitchen.kitchen_name} — ${plan.plan_name}</h3>
                <p>Select one or more meals</p>
            </div>
        </div>
    `;

    list.innerHTML = "";
    meals.forEach(m => {
        list.innerHTML += `
            <div class="card">
                <img src="${m.image_url}">
                <div>
                    <h3>${m.meal_name}</h3>
                    <p style="color:#666;">${m.meal_type} — ₹${m.price}/day</p>
                    <label><input type="checkbox" data-id="${m.meal_id}" data-price="${m.price}"> Select</label>
                </div>
            </div>
        `;
    });

    document.addEventListener("change", evt => {
        if (evt.target.matches("#mealsList input[type='checkbox']")) {
            updateMealTotal(meals);
        }
    });

    updateMealTotal(meals);
}

function updateMealTotal(meals) {
    const checkboxes = [...document.querySelectorAll("#mealsList input[type='checkbox']")];
    let selected = [];
    let perDay = 0;

    checkboxes.forEach(cb => {
        if (cb.checked) {
            const id = Number(cb.dataset.id);
            const price = Number(cb.dataset.price);
            perDay += price;

            const meal = meals.find(m => m.meal_id === id);
            selected.push(meal);
        }
    });

    const monthly = perDay * 30;

    localStorage.setItem("selectedMeals", JSON.stringify(selected));
    localStorage.setItem("perDay", perDay);
    localStorage.setItem("monthly", monthly);

    document.getElementById("priceBox").innerText = `Total: ₹${monthly} / month`;
}

/* ============================================================
   5. SUBSCRIPTION DETAILS PAGE
============================================================ */
function initSubscribePage() {
    const selectedMeals = JSON.parse(localStorage.getItem("selectedMeals") || "[]");
    const perDay = Number(localStorage.getItem("perDay"));
    const monthly = Number(localStorage.getItem("monthly"));

    const kid = Number(localStorage.getItem("kitchenId"));
    const pid = Number(localStorage.getItem("planId"));

    const kitchen = APP.kitchenById[kid];
    const plan = APP.planById[pid];

    const box = document.getElementById("summaryBox");

    if (!selectedMeals.length) {
        box.innerHTML = `<p>No meals selected.</p>`;
        return;
    }

    box.innerHTML = `
        <div class="card">
            <img src="${kitchen.image_url}">
            <div>
                <h3>${kitchen.kitchen_name} — ${plan.plan_name}</h3>
                <p>Selected meals:</p>
                <ul>
                    ${selectedMeals.map(m => `<li>${m.meal_type} — ${m.meal_name} — ₹${m.price}/day</li>`).join("")}
                </ul>
                <p><strong>Per day:</strong> ₹${perDay}</p>
                <p><strong>Monthly:</strong> ₹${monthly}</p>
            </div>
        </div>
    `;

    document.getElementById("userForm").onsubmit = e => {
        e.preventDefault();
        localStorage.setItem("userName", document.getElementById("uname").value);
        localStorage.setItem("userMobile", document.getElementById("umobile").value);
        localStorage.setItem("userAddress", document.getElementById("uaddress").value);
        window.location.href = "payment.html";
    };
}

/* ============================================================
   6. PAYMENT PAGE
============================================================ */
function initPaymentPage() {
    const amount = Number(localStorage.getItem("monthly"));

    const container = document.getElementById("paymentContainer");
    container.innerHTML = `
        <div class="card">
            <h3>Confirm Payment</h3>
            <p>Name: ${localStorage.getItem("userName")}</p>
            <p>Mobile: ${localStorage.getItem("userMobile")}</p>
            <p>Address: ${localStorage.getItem("userAddress")}</p>
            <p><strong>Amount:</strong> ₹${amount}</p>
            <button onclick="completePayment()">Pay Now</button>
        </div>
    `;
}

function completePayment() {
    const subscription = {
        id: "sub_" + Date.now(),
        kitchenId: Number(localStorage.getItem("kitchenId")),
        planId: Number(localStorage.getItem("planId")),
        meals: JSON.parse(localStorage.getItem("selectedMeals")),
        perDay: Number(localStorage.getItem("perDay")),
        monthly: Number(localStorage.getItem("monthly")),
        user: {
            name: localStorage.getItem("userName"),
            mobile: localStorage.getItem("userMobile"),
            address: localStorage.getItem("userAddress")
        }
    };

    localStorage.setItem("latestSubscription", JSON.stringify(subscription));
    window.location.href = "success.html";
}

/* ============================================================
   7. SUCCESS PAGE
============================================================ */
function initSuccessPage() {
    const sub = JSON.parse(localStorage.getItem("latestSubscription"));
    const box = document.getElementById("successBox");

    if (!sub) {
        box.innerHTML = `<p>No subscription found.</p>`;
        return;
    }

    const kitchen = APP.kitchenById[sub.kitchenId];
    const plan = APP.planById[sub.planId];

    box.innerHTML = `
        <div class="card">
            <img src="${kitchen.image_url}">
            <div>
                <h3>Subscription Confirmed</h3>
                <p>Plan: ${plan.plan_name}</p>
                <ul>
                    ${sub.meals.map(m => `<li>${m.meal_type} — ${m.meal_name}</li>`).join("")}
                </ul>
                <p><strong>Total per month:</strong> ₹${sub.monthly}</p>
                <p><strong>ID:</strong> ${sub.id}</p>
            </div>
        </div>
    `;
}