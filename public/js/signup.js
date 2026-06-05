import {
  emailRegex,
  phoneRegex,
  passwordRegex
} from "../validation/validation.js";
import { displayMessage } from "./message.js";
import { saveUser } from "../storage/storage.js";

const form =
  document.getElementById("signupForm");

const fullName =
  document.getElementById("fullName");

const email =
  document.getElementById("email");

const phone =
  document.getElementById("phone");

const password =
  document.getElementById("password");

const togglePassword =
  document.getElementById("togglePassword");

const strengthBar =
  document.getElementById("strengthBar");

/* ERRORS */

const nameError =
  document.getElementById("nameError");

const emailError =
  document.getElementById("emailError");

const phoneError =
  document.getElementById("phoneError");

const passwordError =
  document.getElementById("passwordError");

/* PASSWORD TOGGLE */

togglePassword.addEventListener(
  "click",
  () => {

    password.type =
      password.type === "password"
        ? "text"
        : "password";
  }
);

/* PASSWORD STRENGTH */
password.addEventListener("input", () => {
  const value = password.value;

  let strength = 0;

  const hasLength = value.length >= 8;
  const hasUpper = /[A-Z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSymbol = /[^A-Za-z0-9]/.test(value);

  /* RULE UI */
  document.getElementById("lenRule").textContent =
    hasLength ? "✔ At least 8 characters" : "❌ At least 8 characters";

  document.getElementById("upperRule").textContent =
    hasUpper ? "✔ One uppercase letter" : "❌ One uppercase letter";

  document.getElementById("numRule").textContent =
    hasNumber ? "✔ One number" : "❌ One number";

  document.getElementById("symbolRule").textContent =
    hasSymbol ? "✔ One special character" : "❌ One special character";

  /* STRENGTH */
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
/* FORM SUBMIT */

form.addEventListener(
  "submit",
  (e) => {

    e.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    if (fullName.value.trim() === "") {
      nameError.textContent =
        "Full name is required";

      isValid = false;
    }

    if (!emailRegex.test(email.value)) {

      emailError.textContent =
        "Invalid email address";

      isValid = false;
    }

    if (!phoneRegex.test(phone.value)) {

      phoneError.textContent =
        "Invalid phone number";

      isValid = false;
    }

    if (!passwordRegex.test(password.value)) {

      passwordError.textContent =
        "Password too weak";

      isValid = false;
    }

    if (!isValid) return;
    // Get existing users
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const emailExists = users.some(
      (user) =>
        user.email.toLowerCase() ===
        email.value.toLowerCase()
    );

    if (emailExists) {

      emailError.textContent =
        "Email already exists";

      return;
    }

    const user = {

      id: Date.now(),

      fullName: fullName.value,

      email: email.value,

      phone: phone.value,

      password: password.value
    };

    saveUser(user);
    displayMessage(
      "Account created successfully",
      "success"
    );
    setTimeout(() => {
      window.location.href = "./login.html"
    }, 4000);

    form.reset();
    strengthBar.style.width = "0%";
    strengthBar.style.background = "transparent";
  }
);