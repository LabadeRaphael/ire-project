import { showToast } from "./components/toast.js";
import { passwordRegex } from "../validation/validation.js";
const form = document.getElementById("resetForm");
const newPassword = document.getElementById("newPassword");

const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get("token");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const resetData = JSON.parse(localStorage.getItem("resetPassword"));

//   if (!resetData || resetData.token !== token) {
//     showToast("Invalid or expired reset link", "error");
//     return;
//   }

//   if (Date.now() > resetData.expires) {
//     showToast("Reset link expired", "error");
//     return;
//   }

//   const users = JSON.parse(localStorage.getItem("users")) || [];

//   const updatedUsers = users.map(user => {
//     if (user.email === resetData.email) {
//       return {
//         ...user,
//         password: newPassword.value
//       };
//     }
//     return user;
//   });

//   localStorage.setItem("users", JSON.stringify(updatedUsers));

//   localStorage.removeItem("resetPassword");

//   showToast("Password reset successful", "success");

//   setTimeout(() => {
//     window.location.href = "./login.html";
//   }, 1000);
// });
const strengthBar = document.getElementById("strengthBar");

newPassword.addEventListener("input", () => {
  const value = newPassword.value;

  const hasLength = value.length >= 8;
  const hasUpper = /[A-Z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSymbol = /[^A-Za-z0-9]/.test(value);

  document.getElementById("lenRule").textContent =
    hasLength ? "✔ At least 8 characters" : "❌ At least 8 characters";

  document.getElementById("upperRule").textContent =
    hasUpper ? "✔ One uppercase letter" : "❌ One uppercase letter";

  document.getElementById("numRule").textContent =
    hasNumber ? "✔ One number" : "❌ One number";

  document.getElementById("symbolRule").textContent =
    hasSymbol ? "✔ One special character" : "❌ One special character";

  let strength = 0;
  if (hasLength) strength++;
  if (hasUpper) strength++;
  if (hasNumber) strength++;
  if (hasSymbol) strength++;

  if (strength === 1) {
    strengthBar.style.width = "25%";
    strengthBar.style.background = "red";
  }

  if (strength === 2) {
    strengthBar.style.width = "50%";
    strengthBar.style.background = "orange";
  }

  if (strength === 3) {
    strengthBar.style.width = "75%";
    strengthBar.style.background = "yellow";
  }

  if (strength === 4) {
    strengthBar.style.width = "100%";
    strengthBar.style.background = "green";
  }
});
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

  /* PASSWORD VALIDATION (IMPORTANT) */
  if (!passwordRegex.test(newPassword.value)) {
    showToast(
      "Password must be 8+ chars, include uppercase, number & symbol",
      "error"
    );
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