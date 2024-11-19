document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const fullnameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent form from submitting

        // Trim input values
        const fullname = fullnameInput.value.trim();
        const email = emailInput.value.trim();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Validate form fields
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
        } else if (password !== confirmPassword) {
            alert("Passwords do not match.");
        } else if (password.length < 6) {
            alert("Password should be at least 6 characters long.");
        } else {
            // If all validations pass, proceed with registration
            alert("Registration successful!");
            // Redirect or send data to server (example)
            // window.location.href = "welcome.html";
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }
});