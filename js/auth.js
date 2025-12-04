/* ==========================================
   Bowl — Mock OTP Authentication System
   Shared across all pages
========================================== */

(function() {

    // Insert modal into DOM
    insertAuthModal();

    function insertAuthModal() {
        const modal = `
        <div id="authOverlay" class="auth-overlay hidden">
            <div class="auth-modal">

                <div id="authStep1">
                    <h3>Sign In</h3>
                    <p class="small-text">Enter your name and mobile number</p>

                    <label>Name</label>
                    <input id="authName" type="text" />

                    <label>Mobile Number</label>
                    <input id="authMobile" type="text" maxlength="10" />

                    <button class="primary-btn" id="sendOtpBtn">Send OTP</button>
                </div>

                <div id="authStep2" class="hidden">
                    <h3>Enter OTP</h3>
                    <p class="small-text">We sent a mock OTP to your number</p>

                    <input id="otpInput" type="text" maxlength="4" placeholder="1234" />

                    <button class="primary-btn" id="verifyOtpBtn">Verify OTP</button>

                    <p class="otp-hint">Use test OTP: <strong>1234</strong></p>
                </div>

            </div>
        </div>
        `;
        document.body.insertAdjacentHTML("beforeend", modal);

        attachAuthEvents();
    }

    function attachAuthEvents() {
        const sendOtpBtn = document.getElementById("sendOtpBtn");
        const verifyOtpBtn = document.getElementById("verifyOtpBtn");

        sendOtpBtn.onclick = () => {
            let name = document.getElementById("authName").value.trim();
            let mobile = document.getElementById("authMobile").value.trim();

            if (name.length < 2) return alert("Enter valid name");
            if (!/^[0-9]{10}$/.test(mobile)) return alert("Enter valid 10 digit mobile");

            localStorage.setItem("temp_name", name);
            localStorage.setItem("temp_mobile", mobile);

            document.getElementById("authStep1").classList.add("hidden");
            document.getElementById("authStep2").classList.remove("hidden");
        };

        verifyOtpBtn.onclick = () => {
            let otp = document.getElementById("otpInput").value.trim();
            if (otp !== "1234") return alert("Invalid OTP (use 1234)");

            localStorage.setItem("signedIn", "true");
            localStorage.setItem("user_name", localStorage.getItem("temp_name"));
            localStorage.setItem("user_mobile", localStorage.getItem("temp_mobile"));

            localStorage.removeItem("temp_name");
            localStorage.removeItem("temp_mobile");

            closeAuth();
            updateHeaderUserState();

            if (window.authCallback) window.authCallback();
        };
    }

    // OPEN authentication modal
    window.openAuth = function(callback) {
        document.getElementById("authOverlay").classList.remove("hidden");
        window.authCallback = callback || null;
    };

    // CLOSE authentication modal
    window.closeAuth = function() {
        document.getElementById("authOverlay").classList.add("hidden");
        window.authCallback = null;

        // reset fields
        document.getElementById("authStep1").classList.remove("hidden");
        document.getElementById("authStep2").classList.add("hidden");

        document.getElementById("authName").value = "";
        document.getElementById("authMobile").value = "";
        document.getElementById("otpInput").value = "";
    };

    // Header update depending on sign-in state
    window.updateHeaderUserState = function() {
        const btn = document.getElementById("signinBtn");
        if (!btn) return;

        if (localStorage.getItem("signedIn")) {
            let name = localStorage.getItem("user_name");
            btn.innerHTML = "Hi, " + name.split(" ")[0];
            btn.style.background = "white";
            btn.style.color = "#4CAF50";
        } else {
            btn.innerHTML = "Sign In";
        }
    };

    // Initialize on load
    document.addEventListener("DOMContentLoaded", updateHeaderUserState);

})();