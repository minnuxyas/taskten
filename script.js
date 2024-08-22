function validatePasswords() {
    // Get the values of the password fields
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if the passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}
