import { emailRegex }
from "../validation/validation.js";

import {
  getUsers,
  saveCurrentUser
}
from "../storage/storage.js";
import { displayMessage } from "./message.js";

/* FORM */

const form =
 document.getElementById("loginForm");

const email =
 document.getElementById("email");

const password =
 document.getElementById("password");

const togglePassword =
 document.getElementById("togglePassword");

const rememberMe =
 document.getElementById("rememberMe");

/* ERRORS */

const emailError =
 document.getElementById("emailError");

const passwordError =
 document.getElementById("passwordError");

/* TOGGLE PASSWORD */

togglePassword.addEventListener(
  "click",
  () => {

    password.type =
      password.type === "password"
      ? "text"
      : "password";
  }
);

/* LOGIN */

form.addEventListener(
  "submit",
  (e) => {

    e.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    /* EMAIL VALIDATION */

    if (!emailRegex.test(email.value)) {

      emailError.textContent =
       "Invalid email address";

      isValid = false;
    }

    /* PASSWORD */

    if (password.value.trim() === "") {

      passwordError.textContent =
       "Password is required";

      isValid = false;
    }

    if (!isValid) return;

    /* GET USERS */

    const users = getUsers();

    /* FIND USER */

    const existingUser =
      users.find(user => {

        return (
          user.email === email.value &&
          user.password === password.value
        );
      });

    /* INVALID */

    if (!existingUser) {

      passwordError.textContent =
       "Incorrect email or password";

      return;
    }

    /* SAVE LOGIN */

    saveCurrentUser(existingUser);

    /* REMEMBER ME */

    if (rememberMe.checked) {

      localStorage.setItem(
        "rememberedEmail",
        email.value
      );
    } else {

      localStorage.removeItem(
        "rememberedEmail"
      );
    }

    /* SUCCESS */

    displayMessage(
      "Login Successful",
      "success"
    );
    
    /* REDIRECT */
    setTimeout(() => {
      window.location.href = "./index.html";
    }, 4000);

  }
);

/* LOAD REMEMBERED EMAIL */

window.addEventListener(
  "DOMContentLoaded",
  () => {

    const rememberedEmail =
      localStorage.getItem(
        "rememberedEmail"
      );

    if (rememberedEmail) {

      email.value = rememberedEmail;

      rememberMe.checked = true;
    }
  }
);