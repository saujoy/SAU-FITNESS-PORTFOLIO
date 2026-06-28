// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            const nameInput = document.querySelector('input[type="text"]');
            const emailInput = document.querySelector('input[type="email"]');
            
            // Basic validation check
            if (nameInput && nameInput.value.trim() === "") {
                alert("Please enter your name to get started with Coach Sau!");
                event.preventDefault(); // Stop form submission
                return;
            }
            
            if (emailInput && emailInput.value.trim() === "") {
                alert("Please enter a valid email address!");
                event.preventDefault(); // Stop form submission
                return;
            }
            
            alert("Success! Your fitness journey with Coach Sau is about to begin.");
        });
    }
});
// Feature 2: Coach Sau Quick BMI Calculator
function calculateBMI() {
    const weight = parseFloat(document.getElementById("bmi-weight").value);
    const height = parseFloat(document.getElementById("bmi-height").value) / 100; // convert cm to meters

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("bmi-result").innerText = "Please enter valid numbers.";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    document.getElementById("bmi-result").innerText = `Your BMI is ${bmi} (${category}). Let's smash your goals!`;
}