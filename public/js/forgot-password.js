import { showToast } from "./components/toast.js";

/* FORM */
const forgotForm = document.getElementById("forgotForm");
const emailInput = document.getElementById("email");

forgotForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.email === email);

  if (!user) {
    showToast("Email not found", "error");
    return;
  }

  // generate reset token
  const resetToken = Date.now() + "-" + Math.random();

  const resetData = {
    email,
    token: resetToken,
    expires: Date.now() + 1000 * 60 * 10 // 10 minutes
  };

  localStorage.setItem("resetPassword", JSON.stringify(resetData));

  showToast("Reset link generated and expires in 10 minute", "success");

  // simulate email redirect
  setTimeout(() => {
    window.location.href = `reset-password.html?token=${resetToken}`;
  }, 1000);
});