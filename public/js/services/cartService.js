export function getCurrentUser() {

  return JSON.parse(
    localStorage.getItem("currentUser")
  );
}

export function getAllCarts() {

  return JSON.parse(
    localStorage.getItem("carts")
  ) || {};
}

export function saveAllCarts(carts) {

  localStorage.setItem(
    "carts",
    JSON.stringify(carts)
  );
}

export function getCart() {

  const user = getCurrentUser();

  if (!user) return [];

  const carts = getAllCarts();

  return carts[user.id] || [];
}

export function addToCart(product) {

  const user = getCurrentUser();

  if (!user) return;

  const carts = getAllCarts();

  const userCart =
    carts[user.id] || [];

  const existingProduct =
    userCart.find(
      item => item.id === product.id
    );

  if (existingProduct) {

    existingProduct.quantity += 1;

  } else {

    userCart.push({
      ...product,
      quantity: 1
    });
  }

  carts[user.id] = userCart;

  saveAllCarts(carts);
}

export function removeFromCart(
  productId
) {

  const user =
    getCurrentUser();

  if (!user) return;

  const carts =
    getAllCarts();

  const userCart =
    carts[user.id] || [];

  const updatedCart =
    userCart.filter(
      item => item.id !== productId
    );

  carts[user.id] =
    updatedCart;

  saveAllCarts(carts);
}

export function increaseQuantity(
  productId
) {

  const user =
    getCurrentUser();

  if (!user) return;

  const carts =
    getAllCarts();

  const userCart =
    carts[user.id] || [];

  const product =
    userCart.find(
      item => item.id === productId
    );

  if (product) {

    product.quantity += 1;
  }

  carts[user.id] =
    userCart;

  saveAllCarts(carts);
}

export function decreaseQuantity(
  productId
) {

  const user =
    getCurrentUser();

  if (!user) return;

  const carts =
    getAllCarts();

  const userCart =
    carts[user.id] || [];

  const product =
    userCart.find(
      item => item.id === productId
    );

  if (!product) return;

  if (product.quantity > 1) {

    product.quantity -= 1;

  } else {

    carts[user.id] =
      userCart.filter(
        item => item.id !== productId
      );
  }

  saveAllCarts(carts);
}

export function getCartTotal() {

  const cart =
    getCart();

  return cart.reduce(
    (total, item) => {

      return total +
        (
          item.price *
          item.quantity
        );
    },

    0
  ).toFixed(2);
}
export function clearCart() {

  localStorage.removeItem(
    "cart"
  );
}