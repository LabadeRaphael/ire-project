import {
  addToCart
}
  from "../services/cartService.js";

import {
  showToast
}
  from "./toast.js";

import {
  openProductModal
}
  from "./modal.js";
import { renderNavbar } from "./navbar.js";

export function renderProducts(
  products
) {

  const productsGrid =
    document.getElementById(
      "productsGrid"
    );

  /* EMPTY */

  if (products.length === 0) {

    productsGrid.innerHTML = `

      <div class="empty-state">

        <h3>
          No Products Found
        </h3>

        <p>
          Try another search or filter.
        </p>

      </div>
    `;

    return;
  }

  productsGrid.innerHTML = "";

  products.forEach(product => {

    const card =
      document.createElement("div");

    card.classList.add(
      "product-card"
    );

    card.addEventListener(
      "click",
      () => {

        openProductModal(product);
      }
    );

    card.innerHTML = `

      <div class="product-image">

        <img
          src="${product.image}"
          alt="${product.title}"
        >

      </div>

      <div class="product-content">

        <span class="category">
          ${product.category}
        </span>

        <h3>
          ${product.title}
        </h3>

        <div class="rating">

          ⭐ ${product.rating}

        </div>

        <div class="product-footer">

          <h4>
            $${product.price}
          </h4>

          <button
            class="cart-btn"
            data-id="${product.id}"
          >

            Add To Cart

          </button>

        </div>

      </div>
    `;

    productsGrid.appendChild(card);
  });

  /* CART */

  const cartButtons =
    document.querySelectorAll(
      ".cart-btn"
    );

  cartButtons.forEach(button => {

    button.addEventListener(
      "click",
      () => {
          event.stopPropagation();
        const id =
          Number(
            button.dataset.id
          );

        const product =
          products.find(
            item => item.id === id
          );

        addToCart(product);

        showToast(
          "Product added to cart",
          "success"
        );
        renderNavbar()
      }
    );
  });
}