import { renderNavbar } from "./components/navbar.js";
import { products } from "./data/products.js";
import { renderProducts } from "./components/products.js";

renderNavbar();

/* STATE */
let filteredProducts = [...products];

/* INPUTS */
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

/* FILTER ENGINE */
function filterProducts() {

  filteredProducts = [...products];

  /* SEARCH */
  const searchValue = searchInput.value.toLowerCase().trim();

  if (searchValue) {
    filteredProducts = filteredProducts.filter(p =>
      p.title.toLowerCase().includes(searchValue)
    );
  }

  /* CATEGORY */
  const categoryValue = categoryFilter.value;

  if (categoryValue !== "all") {
    filteredProducts = filteredProducts.filter(p =>
      p.category === categoryValue
    );
  }

  /* SORT */
  if (sortFilter.value === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortFilter.value === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sortFilter.value === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(filteredProducts);
}

/* EVENTS */
searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
sortFilter.addEventListener("change", filterProducts);

/* INIT */
renderProducts(filteredProducts);