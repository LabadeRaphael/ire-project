import {
  addToCart
}
  from "../services/cartService.js";
import {
  isInWishlist,
  toggleWishlist
}
  from "../services/wishlistsService.js";
import { renderNavbar } from "./navbar.js";

import {
  showToast
}
  from "./toast.js";

const productModal =
  document.getElementById(
    "productModal"
  );

const modalBody =
  document.getElementById(
    "modalBody"
  );

const closeModal =
  document.getElementById(
    "closeModal"
  );

export function openProductModal(
  product
) {

  let quantity = 1;

  renderModalContent();

  productModal.classList.add(
    "show"
  );

  document.body.style.overflow =
    "hidden";

  /* CLOSE */

  closeModal.addEventListener(
    "click",
    closeProductModal
  );

  /* OUTSIDE CLICK */

  productModal.addEventListener(
    "click",
    (e) => {

      if (
        e.target === productModal
      ) {

        closeProductModal();
      }
    }
  );

  /* RENDER */

  function renderModalContent() {

    modalBody.innerHTML = `

      <div class="modal-image">

        <img
          src="${product.image}"
          alt="${product.title}"
        >

      </div>

      <div class="modal-details">

        <span class="modal-category">
          ${product.category}
        </span>

        <h2>
          ${product.title}
        </h2>

        <div class="modal-rating">

          ⭐ ${product.rating}

        </div>

        <div class="modal-price">

          $${product.price}

        </div>

        <p class="modal-description">

          Premium quality product
          designed for modern users
          who value elegance,
          comfort and performance.

        </p>

        <!-- QUANTITY -->

        <div class="quantity-wrapper">

          <h4>Quantity</h4>

          <div class="quantity-controls">

            <button id="decreaseQty">
              -
            </button>

            <span id="quantityValue">
              ${quantity}
            </span>

            <button id="increaseQty">
              +
            </button>

          </div>

        </div>

        <!-- ACTIONS -->

        <div class="modal-actions">

          <button
            class="modal-cart-btn"
            id="modalCartBtn"
          >

            Add To Cart

          </button>

      
        <button
          class="modal-wishlist-btn"
          id="wishlistBtn"
        >
          ${isInWishlist(product.id)
          ? "❤️"
          : "🤍"
        }

      </button>

      </div>
    `;

    /* QUANTITY */

    const quantityValue =
      document.getElementById(
        "quantityValue"
      );

    document
      .getElementById(
        "increaseQty"
      )
      .addEventListener(
        "click",
        () => {

          quantity++;

          quantityValue.textContent =
            quantity;
        }
      );

    document
      .getElementById(
        "decreaseQty"
      )
      .addEventListener(
        "click",
        () => {

          if (quantity > 1) {

            quantity--;

            quantityValue.textContent =
              quantity;
          }
        }
      );

    /* ADD TO CART */

    document
      .getElementById(
        "modalCartBtn"
      )
      .addEventListener(
        "click",
        () => {

          for (
            let i = 0;
            i < quantity;
            i++
          ) {

            addToCart(product);
          }

          showToast(
            "Product added to cart",
            "success"
          );

          closeProductModal();
        }
      );
    document
      .getElementById(
        "wishlistBtn"
      )
      .addEventListener(
        "click",
        () => {

          const added =
            toggleWishlist(product);

          const wishlistBtn =
            document.getElementById(
              "wishlistBtn"
            );

          wishlistBtn.textContent =
            added
              ? "❤️"
              : "🤍";

          showToast(
            added
              ? "Added to wishlist"
              : "Removed from wishlist",

            added
              ? "success"
              : "warning"
          );
          renderNavbar()
        }
      );
  }
}

/* CLOSE FUNCTION */

function closeProductModal() {

  productModal.classList.remove(
    "show"
  );

  document.body.style.overflow =
    "auto";
}