import {
  renderNavbar
}
from "./components/navbar.js";

import {
  products
}
from "./data/products.js";

import {
  renderProducts
}
from "./components/products.js";

/* NAVBAR */

renderNavbar();

/* FILTER INPUTS */

const searchInput =
 document.getElementById(
  "searchInput"
 );

const categoryFilter =
 document.getElementById(
  "categoryFilter"
 );

const sortFilter =
 document.getElementById(
  "sortFilter"
 );

/* INITIAL */

renderProducts(products);

/* FILTER FUNCTION */

function filterProducts() {

  let filteredProducts =
    [...products];

  /* SEARCH */

  const searchValue =
    searchInput.value
      .toLowerCase()
      .trim();

  if (searchValue) {

    filteredProducts =
      filteredProducts.filter(
        product => {

          return product.title
            .toLowerCase()
            .includes(searchValue);
        }
      );
  }

  /* CATEGORY */

  const categoryValue =
    categoryFilter.value;

  if (
    categoryValue !== "all"
  ) {

    filteredProducts =
      filteredProducts.filter(
        product => {

          return (
            product.category ===
            categoryValue
          );
        }
      );
  }

  /* SORTING */

  const sortValue =
    sortFilter.value;

  if (sortValue === "low-high") {

    filteredProducts.sort(
      (a, b) =>
        a.price - b.price
    );
  }

  if (sortValue === "high-low") {

    filteredProducts.sort(
      (a, b) =>
        b.price - a.price
    );
  }

  if (sortValue === "rating") {

    filteredProducts.sort(
      (a, b) =>
        b.rating - a.rating
    );
  }

  renderProducts(
    filteredProducts
  );
}

/* EVENTS */

searchInput.addEventListener(
  "input",
  filterProducts
);

categoryFilter.addEventListener(
  "change",
  filterProducts
);

sortFilter.addEventListener(
  "change",
  filterProducts
);