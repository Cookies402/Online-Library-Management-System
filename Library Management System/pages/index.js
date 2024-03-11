const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const forgotPassword = document.getElementById("forgot-password");
const dontHaveAccount = document.getElementById("dont-have-account");
const signupLink = document.getElementById("signup-link");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Start a session at the beginning of each page
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    // Redirect to the login page if not logged in
    header("Location: login.php");
    exit();
}

// Logout
session_start();
session_destroy();
header("Location: login.php");
exit();

// Check user role to determine access
if ($_SESSION['user_role'] === 'admin') {
    // Allow access to admin features
} else {
    // Restrict access for regular users
    header("Location: unauthorized.php");
    exit();
}

});
