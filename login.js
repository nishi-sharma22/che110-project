document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent form from submitting

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Simple validation for demonstration
        if (validateLogin(username, password)) {
            alert("Login successful!");
            // Redirect to a new page (example)
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid username or password.");
        }
    });

    function validateLogin(username, password) {
        // Replace these credentials with actual validation logic as needed
        const validUsername = "admin";
        const validPassword = "password123";

        return username === validUsername && password === validPassword;
    }
});