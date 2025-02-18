const adminUsername = "admin";
const adminPassword = "password123"; // You can change this to something more secure

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === adminUsername && password === adminPassword) {
        document.getElementById('loginMessage').innerText = "Login successful! Redirecting...";
        // Redirect to the admin panel after a successful login
        setTimeout(() => {
            window.location.href = "adminPanel.html"; // Redirect to the admin page
        }, 2000);
    } else {
        document.getElementById('loginMessage').innerText = "Incorrect username or password!";
    }
}
