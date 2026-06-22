import {
  renderNavbar
}
from "./components/navbar.js";

import {
  renderProducts
}
from "./components/products.js";
import { requireLogin } from "./services/authService.js";

import {
  getWishlist
}
from "./services/wishlistsService.js";

/* AUTH */
requireLogin()

/* NAVBAR */

renderNavbar();
/* PRODUCTS */

const wishlist =
  getWishlist();

renderProducts(
  wishlist
);

