// ==========================================================================
// SAU FITNESS CORE INTERACTIVE ACTIONS
// ==========================================================================

document.addEventListener("DOMContentLoaded", function () {
    
    // --- FEATURE 1: DYNAMIC GYM CONTACT FORM VALIDATION ---
    const contactForm = document.getElementById('gymContactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent standard page reloads
            
            let isValid = true;
            const name = document.getElementById('fullName');
            const email = document.getElementById('emailAddress');
            const phone = document.getElementById('phoneNumber');
            const msg = document.getElementById('formMessage');
            const alertBox = document.getElementById('formAlertBox');

            // Reset UI Bootstrap Error States
            [name, email, phone, msg].forEach(el => {
                if (el) el.classList.remove('is-invalid');
            });
            if (alertBox) alertBox.innerHTML = '';

            // Full Name Check
            if (name && !name.value.trim()) {
                name.classList.add('is-invalid');
                isValid = false;
            }

            // Email Address Syntax Check
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email && !emailRegex.test(email.value.trim())) {
                email.classList.add('is-invalid');
                isValid = false;
            }

            // Phone Number Check
            if (phone && !phone.value.trim()) {
                phone.classList.add('is-invalid');
                isValid = false;
            }

            // Message Body Check
            if (msg && !msg.value.trim()) {
                msg.classList.add('is-invalid');
                isValid = false;
            }

            // If form complies successfully, render premium success alert box
            if (isValid) {
                if (alertBox) {
                    const submittedName = name ? name.value.trim() : 'there';
                    alertBox.innerHTML = `
                        <div class="alert alert-success bg-pink border-0 text-white text-center shadow-sm" role="alert">
                            <strong>Success!</strong> Thank you, ${submittedName}. Your message has been sent. We look forward to helping you grow stronger! 💜
                        </div>
                    `;
                }
                contactForm.reset();
            }
        });
    }
});

// --- FEATURE 2: COACH SAU QUICK BMI CALCULATOR ---
// (Kept outside the DOM block so your HTML button can access it globally via onclick="calculateBMI()")
function calculateBMI() {
    const weightInput = document.getElementById("bmi-weight");
    const heightInput = document.getElementById("bmi-height");
    const resultOutput = document.getElementById("bmi-result");

    // Safety check to ensure elements exist on the current page before running logic
    if (!weightInput || !heightInput || !resultOutput) return;

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // convert cm to meters

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultOutput.innerText = "Please enter valid numbers.";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    resultOutput.innerText = `Your BMI is ${bmi} (${category}). Let's smash your goals!`;
}