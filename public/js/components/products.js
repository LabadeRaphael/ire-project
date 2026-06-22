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
import { requireLogin } from "../services/authService.js";
import { toggleWishlist } from "../services/wishlistsService.js";

export function renderProducts(
  products
) {

  const productsGrid =
    document.getElementById(
      "productsGrid"
    );

  /* EMPTY */
  const isWishlistPage =
    window.location.pathname
      .includes("wishlist.html");

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
        
        ${isWishlistPage
        ? `
          
          <h4>$${product.price}</h4>
           <div class="product-actions">
            <button class="cart-btn" data-id="${product.id}">
              Add To Cart
            </button>

            <button class="wishlist-btn" data-id="${product.id}">
              ❤️
            </button>
          </div>
          
        `: `
        <div class="product-footer">
          <h4>$${product.price}</h4>
            <button class="cart-btn" data-id="${product.id}">
              Add To Cart
            </button>
        </div>
        `
      }`

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

        /* LOGIN CHECK */

        if (!requireLogin()) {
          return;
        }
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
  const wishlistButtons =
    document.querySelectorAll(
      ".wishlist-btn"
    );

  wishlistButtons.forEach(button => {

    button.addEventListener(
      "click",
      (event) => {

        event.stopPropagation();

        const id =
          Number(
            button.dataset.id
          );

        const product =
          products.find(
            item => item.id === id
          );

        const added =
          toggleWishlist(product);

        showToast(
          added
            ? "Added to wishlist"
            : "Removed from wishlist",

          added
            ? "success"
            : "warning"
        );

        renderNavbar();

        if (!added) {

          renderProducts(
            products.filter(
              item => item.id !== id
            )
          );
        }
      }
    );
  });
}