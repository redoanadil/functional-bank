document.getElementById('login-button').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if (userEmail == 'admin@gmail.com' && userPassword == 'admin123') {
        window.location.href = 'banking.html';
    }

})