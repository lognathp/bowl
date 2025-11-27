/* ========== DATA ========== */
/* Using the exact kitchens you provided, expanded to include categories with meals */
const kitchens = {
  bangalore: [
{
      id: 1,
      name: "FitFuel Kitchen",
      img: "https://picsum.photos/seed/fitfuel/400/300",
      categories: {
        weightloss: {
          label: "Weight Loss",
          meals: [
            { id: 1101, type: "Breakfast", name: "Oats & Fruit Bowl", price: 120, img: "https://picsum.photos/seed/wlbf/400/300" },
            { id: 1102, type: "Lunch", name: "Grilled Chicken Salad", price: 220, img: "https://picsum.photos/seed/wlll/400/300" },
            { id: 1103, type: "Dinner", name: "Steamed Veg Plate", price: 160, img: "https://picsum.photos/seed/wldn/400/300" }
          ]
        },
        weightgain: {
          label: "Weight Gain",
          meals: [
            { id: 1201, type: "Breakfast", name: "Peanut Butter Oats", price: 150, img: "https://picsum.photos/seed/wgbf/400/300" },
            { id: 1202, type: "Lunch", name: "Calorie Dense Rice Bowl", price: 260, img: "https://picsum.photos/seed/wgll/400/300" },
            { id: 1203, type: "Dinner", name: "Paneer Ghee Roast", price: 240, img: "https://picsum.photos/seed/wgdn/400/300" }
          ]
        },
        musclegain: {
          label: "Muscle Gain",
          meals: [
            { id: 1301, type: "Breakfast", name: "Egg White Omelette", price: 180, img: "https://picsum.photos/seed/mgbf/400/300" },
            { id: 1302, type: "Lunch", name: "High Protein Chicken Rice", price: 270, img: "https://picsum.photos/seed/mgll/400/300" },
            { id: 1303, type: "Dinner", name: "Beef Power Bowl", price: 320, img: "https://picsum.photos/seed/mgdn/400/300" }
          ]
        },
        diabetic: {
          label: "Diabetic Friendly",
          meals: [
            { id: 1401, type: "Breakfast", name: "Low Sugar Idli", price: 110, img: "https://picsum.photos/seed/dbbf/400/300" },
            { id: 1402, type: "Lunch", name: "Brown Rice & Dal", price: 180, img: "httpsum.photos/seed/dbll/400/300" },
            { id: 1403, type: "Dinner", name: "Millet Veg Bowl", price: 150, img: "https://picsum.photos/seed/dbdn/400/300" }
          ]
        }
      }
    },

    {
      id: 2,
      name: "KetoLite Kitchen",
      img: "https://picsum.photos/seed/ketolite/400/300",
      categories: {
        musclegain: {
          label: "Muscle Gain",
          meals: [
            { id: 2001, type: "Breakfast", name: "Keto Paneer Bowl", price: 190, img: "https://picsum.photos/seed/kl1/400/300" },
            { id: 2002, type: "Dinner", name: "Zero Carb Chicken", price: 270, img: "https://picsum.photos/seed/kl2/400/300" }
          ]
        },
        weightloss: {
          label: "Weight Loss",
          meals: [
            { id: 2003, type: "Lunch", name: "Cauliflower Rice Bowl", price: 170, img: "https://picsum.photos/seed/kl3/400/300" }
          ]
        },
        diabetic: {
          label: "Diabetic Friendly",
          meals: [
            { id: 2004, type: "Dinner", name: "Low GI Fish Bowl", price: 210, img: "https://picsum.photos/seed/kl4/400/300" }
          ]
        }
      }
    },

    {
      id: 3,
      name: "GreenBowl Meals",
      img: "https://picsum.photos/seed/greenbowl/400/300",
      categories: {
        weightloss: {
          label: "Weight Loss",
          meals: [
            { id: 3001, type: "Breakfast", name: "Green Smoothie Bowl", price: 130, img: "https://picsum.photos/seed/gb1/400/300" },
            { id: 3002, type: "Lunch", name: "Quinoa Veg Bowl", price: 200, img: "https://picsum.photos/seed/gb2/400/300" }
          ]
        },
        diabetic: {
          label: "Diabetic Friendly",
          meals: [
            { id: 3003, type: "Dinner", name: "Brown Rice & Dal", price: 150, img: "https://picsum.photos/seed/gb3/400/300" }
          ]
        }
      }
    },

    {
      id: 4,
      name: "ProteinBox Kitchen",
      img: "https://picsum.photos/seed/proteinbox/400/300",
      categories: {
        musclegain: {
          label: "Muscle Gain",
          meals: [
            { id: 4001, type: "Breakfast", name: "Protein Pancakes", price: 170, img: "https://picsum.photos/seed/pb1/400/300" },
            { id: 4002, type: "Lunch", name: "High Protein Chicken Rice", price: 260, img: "https://picsum.photos/seed/pb2/400/300" },
            { id: 4003, type: "Dinner", name: "Paneer Protein Bowl", price: 220, img: "https://picsum.photos/seed/pb3/400/300" }
          ]
        },
        weightgain: {
          label: "Weight Gain",
          meals: [
            { id: 4004, type: "Lunch", name: "Calorie Dense Rice Bowl", price: 300, img: "https://picsum.photos/seed/pb4/400/300" }
          ]
        }
      }
    },

    {
      id: 5,
      name: "Diabetic Delight Hub",
      img: "https://picsum.photos/seed/diabeticdelight/400/300",
      categories: {
        diabetic: {
          label: "Diabetic Friendly",
          meals: [
            { id: 5001, type: "Breakfast", name: "Low Sugar Idli", price: 120, img: "https://picsum.photos/seed/dd1/400/300" },
            { id: 5002, type: "Lunch", name: "Brown Rice Salad", price: 180, img: "https://picsum.photos/seed/dd2/400/300" }
          ]
        },
        weightloss: {
          label: "Weight Loss",
          meals: [
            { id: 5003, type: "Dinner", name: "Grilled Veg Plate", price: 150, img: "https://picsum.photos/seed/dd3/400/300" }
          ]
        }
      }
    }
  ],

  chennai: [
    {
          id: 6,
          name: "HealthyRoots Kitchen",
          img: "https://picsum.photos/seed/healthyroots/400/300",
          categories: {
            weightloss: {
              label: "Weight Loss",
              meals: [
                { id: 2101, type: "Breakfast", name: "Fruit & Chia Bowl", price: 130, img: "https://picsum.photos/seed/wlbf2/400/300" },
                { id: 2102, type: "Lunch", name: "Lentil Veg Bowl", price: 190, img: "https://picsum.photos/seed/wlll2/400/300" },
                { id: 2103, type: "Dinner", name: "Veg Soup & Salad", price: 150, img: "https://picsum.photos/seed/wldn2/400/300" }
              ]
            },
            weightgain: {
              label: "Weight Gain",
              meals: [
                { id: 2201, type: "Breakfast", name: "Banana Peanut Smoothie", price: 160, img: "https://picsum.photos/seed/wgbf2/400/300" },
                { id: 2202, type: "Lunch", name: "High-Cal Pasta Bowl", price: 290, img: "https://picsum.photos/seed/wgll2/400/300" },
                { id: 2203, type: "Dinner", name: "Creamy Paneer Masala", price: 250, img: "https://picsum.photos/seed/wgdn2/400/300" }
              ]
            },
            musclegain: {
              label: "Muscle Gain",
              meals: [
                { id: 2301, type: "Breakfast", name: "Protein Pancakes", price: 170, img: "https://picsum.photos/seed/mgbf2/400/300" },
                { id: 2302, type: "Lunch", name: "Fish Protein Bowl", price: 280, img: "https://picsum.photos/seed/mgll2/400/300" },
                { id: 2303, type: "Dinner", name: "Paneer Power Bowl", price: 260, img: "https://picsum.photos/seed/mgdn2/400/300" }
              ]
            },
            diabetic: {
              label: "Diabetic Friendly",
              meals: [
                { id: 2401, type: "Breakfast", name: "Ragi Dosa", price: 120, img: "https://picsum.photos/seed/dbbf2/400/300" },
                { id: 2402, type: "Lunch", name: "Millet Khichdi", price: 170, img: "https://picsum.photos/seed/dbll2/400/300" },
                { id: 2403, type: "Dinner", name: "Lentil Spinach Bowl", price: 160, img: "https://picsum.photos/seed/dbdn2/400/300" }
              ]
            }
          }
        },
    {
      id: 7,
      name: "HighProtein Hub",
      img: "https://picsum.photos/seed/highprotein/400/300",
      categories: {
        musclegain: {
          label: "Muscle Gain",
          meals: [
            { id: 6001, type: "Breakfast", name: "Egg & Avocado Toast", price: 180, img: "https://picsum.photos/seed/hp1/400/300" },
            { id: 6002, type: "Lunch", name: "Fish Protein Bowl", price: 260, img: "https://picsum.photos/seed/hp2/400/300" }
          ]
        },
        weightgain: {
          label: "Weight Gain",
          meals: [
            { id: 6003, type: "Dinner", name: "Ghee Rice Plate", price: 270, img: "https://picsum.photos/seed/hp3/400/300" }
          ]
        }
      }
    },

    {
      id: 8,
      name: "LeanMeal Factory",
      img: "https://picsum.photos/seed/leanmeal/400/300",
      categories: {
        weightloss: {
          label: "Weight Loss",
          meals: [
            { id: 7001, type: "Breakfast", name: "Oats Porridge", price: 110, img: "https://picsum.photos/seed/lm1/400/300" },
            { id: 7002, type: "Lunch", name: "Grilled Tofu Salad", price: 190, img: "https://picsum.photos/seed/lm2/400/300" },
            { id: 7003, type: "Dinner", name: "Mixed Veg Stew", price: 140, img: "https://picsum.photos/seed/lm3/400/300" }
          ]
        },
        diabetic: {
          label: "Diabetic Friendly",
          meals: [
            { id: 7004, type: "Lunch", name: "Low GI Millet Bowl", price: 180, img: "https://picsum.photos/seed/lm4/400/300" }
          ]
        }
      }
    },

    {
      id: 9,
      name: "SugarCare Kitchen",
      img: "https://picsum.photos/seed/sugarcare/400/300",
      categories: {
        diabetic: {
          label: "Diabetic Friendly",
          meals: [
            { id: 8001, type: "Breakfast", name: "Fenugreek Pancake", price: 120, img: "https://picsum.photos/seed/sc1/400/300" },
            { id: 8002, type: "Dinner", name: "Spiced Lentil Bowl", price: 160, img: "https://picsum.photos/seed/sc2/400/300" }
          ]
        },
        weightloss: {
          label: "Weight Loss",
          meals: [
            { id: 8003, type: "Lunch", name: "Sprout Salad", price: 150, img: "https://picsum.photos/seed/sc3/400/300" }
          ]
        }
      }
    },

    {
      id: 10,
      name: "MuscleMax Meals",
      img: "https://picsum.photos/seed/musclemax/400/300",
      categories: {
        musclegain: {
          label: "Muscle Gain",
          meals: [
            { id: 9001, type: "Lunch", name: "High Protein Fish Meal", price: 280, img: "https://picsum.photos/seed/mm1/400/300" },
            { id: 9002, type: "Dinner", name: "Beef Power Bowl", price: 320, img: "https://picsum.photos/seed/mm2/400/300" }
          ]
        },
        weightgain: {
          label: "Weight Gain",
          meals: [
            { id: 9003, type: "Breakfast", name: "Peanut Butter Oats", price: 160, img: "https://picsum.photos/seed/mm3/400/300" }
          ]
        }
      }
    }
  ]
};

/* ========== UTILITIES ========== */
function findKitchenById(location, id) {
  return (kitchens[location] || []).find(k => k.id === id);
}

function findCategory(kitchen, catKey) {
  return kitchen && kitchen.categories && kitchen.categories[catKey];
}

/* ========== KITCHENS PAGE WITH FILTERS ========== */
if (location.pathname.includes('kitchens.html')) {
  const loc = localStorage.getItem('location') || 'bangalore';
  const kitchensList = document.getElementById('kitchensList');
  const filterCategory = document.getElementById('filterCategory');
  const filterMealType = document.getElementById('filterMealType');
  const resetBtn = document.getElementById('resetFilters');

  const allKitchens = kitchens[loc] || [];

  function renderKitchens(list) {
    kitchensList.innerHTML = "";

    if (!list.length) {
      kitchensList.innerHTML = `<p>No kitchens match your filters.</p>`;
      return;
    }

    list.forEach(k => {
      kitchensList.innerHTML += `
        <div class="card">
          <img src="${k.img}">
          <div>
            <h3>${k.name}</h3>
            <p style="color:#6b7280;">
              Categories: ${Object.values(k.categories).map(c => c.label).join(', ')}
            </p>
            <button onclick="selectKitchen(${k.id})">View Meal Plans</button>
          </div>
        </div>
      `;
    });
  }

  function applyFilters() {
    let filtered = [...allKitchens];

    const catVal = filterCategory.value;
    const mealTypeVal = filterMealType.value;

    // FILTER 1 — Category (Weight Loss / Weight Gain / Muscle Gain / Diabetic)
    if (catVal) {
      filtered = filtered.filter(k =>
        k.categories[catVal] !== undefined
      );
    }

    // FILTER 2 — Meal Type (Breakfast / Lunch / Dinner)
    if (mealTypeVal) {
      filtered = filtered.filter(k => {
        // check each category for that meal type
        return Object.values(k.categories).some(cat =>
          cat.meals.some(m => m.type === mealTypeVal)
        );
      });
    }

    resetBtn.style.display = (catVal || mealTypeVal) ? "block" : "none";

    renderKitchens(filtered);
  }

  filterCategory.onchange = applyFilters;
  filterMealType.onchange = applyFilters;

  resetBtn.onclick = () => {
    filterCategory.value = "";
    filterMealType.value = "";
    resetBtn.style.display = "none";
    renderKitchens(allKitchens);
  };

  renderKitchens(allKitchens);
}

function selectKitchen(id) {
  localStorage.setItem('kitchenId', id);
  window.location.href = "categories.html";
}

/* ========== CATEGORIES PAGE ========== */
if (location.pathname.includes('categories.html')) {
  const loc = localStorage.getItem('location') || 'bangalore';
  const kid = Number(localStorage.getItem('kitchenId'));
  const kitchen = findKitchenById(loc, kid);

  const header = document.getElementById('kitchenHeader');
  const list = document.getElementById('categoriesList');

  if (!kitchen) {
    header.innerHTML = '<p>No kitchen selected.</p>';
  } else {
header.innerHTML = `
  <div class="kitchen-header">
    <img src="${kitchen.img}">
    <div class="header-content">
      <h3>${kitchen.name}</h3>
      <p>Select a diet category available from this kitchen</p>
    </div>
  </div>
`;

    list.innerHTML = '';
    Object.keys(kitchen.categories).forEach(catKey => {
      const cat = kitchen.categories[catKey];
      list.innerHTML += `
        <div class="card">
          <img src="${cat.meals[0].img}">
          <div style="flex:1">
            <h3>${cat.label}</h3>
            <p style="color:#6b7280;margin:6px 0;">Meals: ${cat.meals.map(m=>m.type).join(', ')}</p>
            <button onclick="selectCategory('${catKey}')">View Meals</button>
          </div>
        </div>
      `;
    });
  }
}

function selectCategory(catKey) {
  localStorage.setItem('categoryKey', catKey);
  window.location.href = 'meal-options.html';
}

/* ========== MEAL OPTIONS PAGE ========== */
if (location.pathname.includes('meal-options.html')) {
  const loc = localStorage.getItem('location') || 'bangalore';
  const kid = Number(localStorage.getItem('kitchenId'));
  const catKey = localStorage.getItem('categoryKey');

  const kitchen = findKitchenById(loc, kid);
  const category = findCategory(kitchen, catKey);
  const mealDiv = document.getElementById('mealsList');
  const header = document.getElementById('mealHeader');

  if (!kitchen || !category) {
    header.innerHTML = '<p>Missing kitchen or category. Please go back.</p>';
  } else {
    header.innerHTML = `
      <div class="card">
        <img src="${kitchen.img}">
        <div>
          <h3>${kitchen.name} — ${category.label}</h3>
          <p style="color:#6b7280;margin-top:6px;">Select one or more meals (Breakfast / Lunch / Dinner)</p>
        </div>
      </div>
    `;

    mealDiv.innerHTML = '';
    category.meals.forEach(meal => {
      mealDiv.innerHTML += `
        <div class="card">
          <img src="${meal.img}">
          <div style="flex:1">
            <h3>${meal.name}</h3>
            <p style="color:#6b7280;margin:6px 0;">${meal.type} — ₹${meal.price} / day</p>
            <label><input type="checkbox" data-id="${meal.id}" data-price="${meal.price}"> Select</label>
          </div>
        </div>
      `;
    });

    // restore previous selections if any
    const saved = JSON.parse(localStorage.getItem('selected_meals_ids') || '[]');
    document.querySelectorAll('#mealsList input[type="checkbox"]').forEach(cb => {
      const id = Number(cb.dataset.id);
      if (saved.includes(id)) cb.checked = true;
    });

    // recalc price
    updateMealTotal();
  }

  // listen for checkbox changes
  document.addEventListener('change', function (e) {
    if (e.target && e.target.matches('#mealsList input[type="checkbox"]')) {
      updateMealTotal();
    }
  });

  function updateMealTotal() {
    const checkboxes = Array.from(document.querySelectorAll('#mealsList input[type="checkbox"]'));
    const selected = [];
    let perDay = 0;
    checkboxes.forEach(cb => {
      if (cb.checked) {
        selected.push(Number(cb.dataset.id));
        perDay += Number(cb.dataset.price);
      }
    });

    const monthly = perDay * 30;
    document.getElementById('priceBox').innerText = `Total: ₹${monthly} / month`;
    localStorage.setItem('final_price', monthly);
    localStorage.setItem('selected_meals_ids', JSON.stringify(selected));
    localStorage.setItem('selected_meals_perday', perDay);
    // also save human readable selected meal objects for summary
    const selectedMeals = [];
    category.meals.forEach(m => { if (selected.includes(m.id)) selectedMeals.push(m); });
    localStorage.setItem('selected_meals_objects', JSON.stringify(selectedMeals));
  }
}

/* ========== SUBSCRIBE (user details) ========== */
if (location.pathname.includes('subscribe.html')) {
  const summaryBox = document.getElementById('summaryBox');
  const loc = localStorage.getItem('location') || 'bangalore';
  const kid = Number(localStorage.getItem('kitchenId'));
  const catKey = localStorage.getItem('categoryKey');

  const kitchen = findKitchenById(loc, kid);
  const category = findCategory(kitchen, catKey);
  const selectedMeals = JSON.parse(localStorage.getItem('selected_meals_objects') || '[]');
  const perDay = Number(localStorage.getItem('selected_meals_perday') || 0);
  const monthly = Number(localStorage.getItem('final_price') || 0);

  if (!kitchen || !category || !selectedMeals.length) {
    summaryBox.innerHTML = '<p>Please select kitchen → category → at least one meal before proceeding.</p>';
    document.getElementById('userForm').style.display = 'none';
  } else {
    let mealListHtml = selectedMeals.map(m => `<li>${m.type} — ${m.name} — ₹${m.price}/day</li>`).join('');
    summaryBox.innerHTML = `
      <div class="card">
        <img src="${kitchen.img}">
        <div>
          <h3>${kitchen.name} — ${category.label}</h3>
          <p style="color:#6b7280;margin:6px 0;">Selected meals:</p>
          <ul style="margin:6px 0 0 18px;">${mealListHtml}</ul>
          <p style="margin-top:10px;"><strong>Per day:</strong> ₹${perDay} &nbsp; <strong>Monthly:</strong> ₹${monthly}</p>
        </div>
      </div>
    `;

    // form submit
    document.getElementById('userForm').onsubmit = function (e) {
      e.preventDefault();
      localStorage.setItem('user_name', document.getElementById('uname').value);
      localStorage.setItem('user_mobile', document.getElementById('umobile').value);
      localStorage.setItem('user_address', document.getElementById('uaddress').value);
      window.location.href = 'payment.html';
    };
  }
}

/* ========== PAYMENT PAGE ========== */
if (location.pathname.includes('payment.html')) {
  const container = document.getElementById('paymentContainer');
  const name = localStorage.getItem('user_name') || '';
  const mobile = localStorage.getItem('user_mobile') || '';
  const address = localStorage.getItem('user_address') || '';
  const monthly = localStorage.getItem('final_price') || 0;

  container.innerHTML = `
    <div class="card">
      <div style="flex:1">
        <h3>Confirm Payment</h3>
        <p style="color:#6b7280;">Name: ${name} · Mobile: ${mobile}</p>
        <p style="color:#6b7280;">Address: ${address}</p>
        <p style="margin-top:10px;"><strong>Amount to pay:</strong> ₹${monthly}</p>
        <p style="color:#6b7280;">(This is a mock payment — no real transaction.)</p>
        <button onclick="completePayment()">Pay Now</button>
      </div>
    </div>
  `;
}

function completePayment() {
  // mark subscription as active in localStorage (mock)
  const sub = {
    id: 'sub_' + Date.now(),
    kitchenId: Number(localStorage.getItem('kitchenId')),
    location: localStorage.getItem('location'),
    categoryKey: localStorage.getItem('categoryKey'),
    meals: JSON.parse(localStorage.getItem('selected_meals_objects') || '[]'),
    perDay: Number(localStorage.getItem('selected_meals_perday') || 0),
    monthly: Number(localStorage.getItem('final_price') || 0),
    user: {
      name: localStorage.getItem('user_name'),
      mobile: localStorage.getItem('user_mobile'),
      address: localStorage.getItem('user_address')
    },
    createdAt: new Date().toISOString()
  };

  localStorage.setItem('latest_subscription', JSON.stringify(sub));
  window.location.href = 'success.html';
}

/* ========== SUCCESS PAGE ========== */
if (location.pathname.includes('success.html')) {
  const box = document.getElementById('successBox');
  const sub = JSON.parse(localStorage.getItem('latest_subscription') || 'null');
  if (!sub) {
    box.innerHTML = '<p>No recent subscription found.</p>';
  } else {
    const kitchen = findKitchenById(sub.location, sub.kitchenId);
    const mealsHtml = sub.meals.map(m => `<li>${m.type} — ${m.name} — ₹${m.price}/day</li>`).join('');
    box.innerHTML = `
      <div class="card">
        <img src="${kitchen ? kitchen.img : ''}">
        <div>
          <h3>Subscription Confirmed</h3>
          <p style="color:#6b7280;">Name: ${sub.user.name} · Mobile: ${sub.user.mobile}</p>
          <p style="color:#6b7280;">Kitchen: ${kitchen ? kitchen.name : '—'}</p>
          <p style="margin-top:8px;"><strong>Selected meals:</strong></p>
          <ul style="margin:6px 0 0 18px;">${mealsHtml}</ul>
          <p style="margin-top:10px;"><strong>Per day:</strong> ₹${sub.perDay} · <strong>Monthly:</strong> ₹${sub.monthly}</p>
          <p style="margin-top:10px; color: #065f46;"><strong>Subscription ID:</strong> ${sub.id}</p>
        </div>
      </div>
    `;
  }
}