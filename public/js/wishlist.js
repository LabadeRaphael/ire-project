import {
  renderNavbar
}
from "./components/navbar.js";

import {
  renderProducts
}
from "./components/products.js";

import {
  getWishlist
}
from "./services/wishlistsService.js";

/* NAVBAR */

renderNavbar();

/* PRODUCTS */

const wishlist =
  getWishlist();

renderProducts(
  wishlist
);