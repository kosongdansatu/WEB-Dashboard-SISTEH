const logoutButton = document.getElementById("logout-btn");

logoutButton.addEventListener("click", () => {
  // Clear any user session data or cookies
  // Redirect user to login page
  window.location.href = "login.html";
});