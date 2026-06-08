import {
  renderNavbar
}
from "./components/navbar.js";

import {
  getCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  getCartTotal
}
from "./services/cartService.js";

import {
  showToast
}
from "./components/toast.js";

import {
 requireLogin
}
from "./services/authService.js";

/* AUTH */
requireLogin()

/* NAVBAR */

renderNavbar();

/* CONTAINER */

const cartContainer =
 document.getElementById(
  "cartContainer"
 );

/* RENDER CART */

function renderCart() {

  const cart =
    getCart();

  /* EMPTY STATE */

  if (cart.length === 0) {

    cartContainer.innerHTML = `

      <div class="empty-cart">

        <h2>
          Your Cart Is Empty
        </h2>

        <p>
          Add products to continue shopping.
        </p>

      </div>
    `;

    return;
  }

  /* CART UI */

  cartContainer.innerHTML = `

    <div class="cart-items">

      ${
        cart.map(item => `

          <div class="cart-card">

            <!-- IMAGE -->

            <div class="cart-image">

              <img
                src="${item.image}"
                alt="${item.title}"
              >

            </div>

            <!-- CONTENT -->

            <div class="cart-content">

              <span class="cart-category">
                ${item.category}
              </span>

              <h3>
                ${item.title}
              </h3>

              <h4>
                $${item.price}
              </h4>

            </div>

            <!-- QUANTITY -->

            <div
              class="cart-quantity"
            >

              <button
                class="decrease-btn"
                data-id="${item.id}"
              >

                -

              </button>

              <span>
                ${item.quantity}
              </span>

              <button
                class="increase-btn"
                data-id="${item.id}"
              >

                +

              </button>

            </div>

            <!-- TOTAL -->

            <div class="cart-total">

              $
              ${
                item.price *
                item.quantity
              }

            </div>

            <!-- REMOVE -->

            <button
              class="remove-btn"
              data-id="${item.id}"
            >

              ✕
            </button>

          </div>

        `).join("")
      }

    </div>

    <!-- SUMMARY -->

    <div class="cart-summary">

      <h3>
        Order Summary
      </h3>

      <div class="summary-row">

        <span>Total</span>

        <strong>

          $${getCartTotal()}

        </strong>

      </div>

  
    <a
        href="./checkout.html"
        class="checkout-btn"
    >

        Proceed To Checkout

    </a>

    </div>
  `;

  /* REMOVE */

  const removeButtons =
    document.querySelectorAll(
      ".remove-btn"
    );

  removeButtons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const id =
          Number(
            button.dataset.id
          );

        removeFromCart(id);

        showToast(
          "Product removed",
          "warning"
        );

        renderCart();

        renderNavbar();
      }
    );
  });

  /* INCREASE */

  const increaseButtons =
    document.querySelectorAll(
      ".increase-btn"
    );

  increaseButtons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const id =
          Number(
            button.dataset.id
          );

        increaseQuantity(id);

        renderCart();

        renderNavbar();
      }
    );
  });

  /* DECREASE */

  const decreaseButtons =
    document.querySelectorAll(
      ".decrease-btn"
    );

  decreaseButtons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const id =
          Number(
            button.dataset.id
          );

        decreaseQuantity(id);

        renderCart();

        renderNavbar();
      }
    );
  });
}

/* INITIAL */

renderCart();