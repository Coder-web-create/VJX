document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous errors
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Get form values
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    var isValid = true;

    // Validate username
    if (username === '') {
        document.getElementById('usernameError').textContent = 'Username is required';
        isValid = false;
    } else if (username.length < 4 || username.length > 20) {
        document.getElementById('usernameError').textContent = 'Username must be between 4 and 20 characters';
        isValid = false;
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
        document.getElementById('usernameError').textContent = 'Username can only contain alphanumeric characters';
        isValid = false;
    }

    // Validate password
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long';
        isValid = false;
    } else if (!/[A-Z]/.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must contain at least one uppercase letter';
        isValid = false;
    } else if (!/[a-z]/.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must contain at least one lowercase letter';
        isValid = false;
    } else if (!/[0-9]/.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must contain at least one digit';
        isValid = false;
    } else if (!/[!@#$%^&*]/.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must contain at least one special character';
        isValid = false;
    }

    // If the form is valid, you can proceed with form submission or further processing
    if (isValid) {
        alert('Form submitted successfully!');
        // Perform further processing, such as sending data to the server
    }
});
