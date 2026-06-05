import {
  renderNavbar
}
  from "./components/navbar.js";

import {
  getCart,
  getCartTotal,
  clearCart
}
  from "./services/cartService.js";

import {
  emailRegex,
  phoneRegex
}
  from "../validation/validation.js";

import {
  showToast
}
  from "./components/toast.js";

/* NAVBAR */

renderNavbar();

/* FORM */
const checkoutForm =
  document.getElementById(
    "checkoutForm"
  );

/* INPUTS */

const fullName =
  document.getElementById(
    "fullName"
  );

const email =
  document.getElementById(
    "email"
  );

const phone =
  document.getElementById(
    "phone"
  );

const address =
  document.getElementById(
    "address"
  );

/* ERRORS */

const nameError =
  document.getElementById(
    "nameError"
  );

const emailError =
  document.getElementById(
    "emailError"
  );

const phoneError =
  document.getElementById(
    "phoneError"
  );

const addressError =
  document.getElementById(
    "addressError"
  );

/* SUMMARY */

const summaryItems =
  document.getElementById(
    "summaryItems"
  );

const checkoutTotal =
  document.getElementById(
    "checkoutTotal"
  );

/* GET CART */

const cart =
  getCart();
  

/* GET CURRENT USER */
const currentUser =
  JSON.parse(
    localStorage.getItem(
      "currentUser"
    )
  );

/* RENDER SUMMARY */

function renderSummary() {

  summaryItems.innerHTML =
    cart.map(item => `

      <div class="summary-item">

        <span>
          ${item.title}
          x ${item.quantity}
        </span>

        <strong>

          $
          ${item.price *
      item.quantity
      }

        </strong>

      </div>

    `).join("");

  checkoutTotal.textContent =
    `$${getCartTotal()}`;
}

renderSummary();

/* SUBMIT */

checkoutForm.addEventListener(
  "submit",
  (e) => {

    e.preventDefault();

    /* RESET */

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    addressError.textContent = "";

    let isValid = true;

    /* VALIDATION */

    if (
      fullName.value.trim() === ""
    ) {

      nameError.textContent =
        "Full name required";

      isValid = false;
    }

    if (
      !emailRegex.test(
        email.value
      )
    ) {

      emailError.textContent =
        "Invalid email";

      isValid = false;
    }

    if (
      !phoneRegex.test(
        phone.value
      )
    ) {

      phoneError.textContent =
        "Invalid phone number";

      isValid = false;
    }

    if (
      address.value.trim() === ""
    ) {

      addressError.textContent =
        "Address required";

      isValid = false;
    }

    if (!isValid) return;

    /* ORDER */

    const order = {

      id: Date.now(),
      
      userId: currentUser.id,
      
      customer: {

        fullName:
          fullName.value,

        email:
          email.value,

        phone:
          phone.value,

        address:
          address.value
      },

      products: cart,

      total:
        getCartTotal(),

      createdAt:
        new Date()
          .toLocaleString()
    };

    /* SAVE TEMPORARILY */

    localStorage.setItem(

      "pendingOrder",

      JSON.stringify(order)

    );

    /* REDIRECT TO PAYMENT */

    window.location.href =
      "./payment.html";
  }
);