import { showToast } from "./components/toast.js";

const form = document.getElementById("resetForm");
const newPassword = document.getElementById("newPassword");

const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get("token");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const resetData = JSON.parse(localStorage.getItem("resetPassword"));

  if (!resetData || resetData.token !== token) {
    showToast("Invalid or expired reset link", "error");
    return;
  }

  if (Date.now() > resetData.expires) {
    showToast("Reset link expired", "error");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const updatedUsers = users.map(user => {
    if (user.email === resetData.email) {
      return {
        ...user,
        password: newPassword.value
      };
    }
    return user;
  });

  localStorage.setItem("users", JSON.stringify(updatedUsers));

  localStorage.removeItem("resetPassword");

  showToast("Password reset successful", "success");

  setTimeout(() => {
    window.location.href = "./login.html";
  }, 1000);
});