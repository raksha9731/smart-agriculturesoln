
// LOGIN FUNCTION
function loginUser(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let savedUser = JSON.parse(localStorage.getItem("farmer"));

    if (savedUser && savedUser.email === email &&
        savedUser.password === password) {

        localStorage.setItem("loggedInUser", savedUser.name);

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid email or password. Please register first.");

    }
}


// REGISTER FUNCTION
function registerUser(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("signupEmail").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {

        alert("Passwords do not match!");
        return;

    }

    let farmer = {
        name: name,
        email: email,
        phone: phone,
        password: password
    };

    localStorage.setItem("farmer", JSON.stringify(farmer));

    alert("Registration successful!");

    location.reload();

}


// OPEN SIGNUP
function showSignup() {

    document.querySelector(".container").innerHTML = `
        <h1>🌱 Create Account</h1>
        <p>Join Smart Agriculture</p>

        <form id="signupForm">

            <input type="text" id="name" placeholder="Full Name" required>

            <input type="email" id="signupEmail" placeholder="Email Address" required>

            <input type="tel" id="phone" placeholder="Phone Number" required>

            <input type="password" id="signupPassword" placeholder="Create Password" required>

            <input type="password" id="confirmPassword" placeholder="Confirm Password" required>

            <button type="submit">Register</button>

        </form>

        <p style="margin-top:20px;">
            Already have an account?
            <a onclick="location.reload()">Login</a>
        </p>
    `;

    document.getElementById("signupForm")
        .addEventListener("submit", registerUser);

}


// CONNECT EVENTS
document.getElementById("loginForm")
    .addEventListener("submit", loginUser);

document.getElementById("showSignup")
    .addEventListener("click", showSignup);
