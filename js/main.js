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