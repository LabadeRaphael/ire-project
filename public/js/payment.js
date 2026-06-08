import {
  renderNavbar
}
from "./components/navbar.js";

import {
  clearCart
}
from "./services/cartService.js";

import {
  saveOrder
}
from "./services/orderService.js";

import {
  showToast
}
from "./components/toast.js";

import { requireLogin } from "./services/authService.js";

/* AUTH */
requireLogin()

/* NAVBAR */
renderNavbar();

const payBtn =
  document.getElementById(
    "payBtn"
  );

const paymentTotal =
  document.getElementById(
    "paymentTotal"
  );

const pendingOrder =
  JSON.parse(

    localStorage.getItem(
      "pendingOrder"
    )

  );

if (!pendingOrder) {

  window.location.href =
    "./cart.html";
}

paymentTotal.textContent =
  `Total: ₦${pendingOrder.total}`;

payBtn.addEventListener(

  "click",

  () => {

    const handler =
      PaystackPop.setup({

        key:
          "pk_test_b612c61da98108077cc39ca361bb2a4a52655d46",

        email:
          pendingOrder.customer.email,

        amount:
          Number(
            pendingOrder.total
          ) * 100,

        currency:
          "NGN",

        callback(
          response
        ) {

          pendingOrder.paymentReference =
            response.reference;

          pendingOrder.status =
            "paid";

          saveOrder(
            pendingOrder
          );

          clearCart();

          localStorage.removeItem(
            "pendingOrder"
          );

          showToast(
            "Payment Successful",
            "success"
          );

          setTimeout(
            () => {

              window.location.href =
                "./success.html";

            },

            1000
          );
        },

        onClose() {

          showToast(
            "Payment Cancelled",
            "warning"
          );
        }
      });

    handler.openIframe();
  }
);