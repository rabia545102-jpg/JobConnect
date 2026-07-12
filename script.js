function signup() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("signupEmail").value.trim();
    let password = document.getElementById("signupPassword").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields.");
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Account Created Successfully!");
    window.location.href = "index.html";
}

function login() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");

    if (email === savedEmail && password === savedPassword) {
        alert("Login Successful!");
        window.location.href = "home.html";
    } else {
        alert("Invalid Email or Password!");
    }
}
// LOGOUT FUNCTION
function logout() {
    let confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {
        alert("Logged out successfully!");
        window.location.href = "index.html";
    }
}