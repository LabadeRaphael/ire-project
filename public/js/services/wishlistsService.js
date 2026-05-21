export function getCurrentUser() {

  return JSON.parse(
    localStorage.getItem(
      "currentUser"
    )
  );
}

export function getAllWishlists() {

  return JSON.parse(
    localStorage.getItem(
      "wishlists"
    )
  ) || {};
}

export function saveAllWishlists(
  wishlists
) {

  localStorage.setItem(
    "wishlists",
    JSON.stringify(wishlists)
  );
}

export function getWishlist() {

  const user =
    getCurrentUser();

  if (!user) return [];

  const wishlists =
    getAllWishlists();

  return wishlists[user.id] || [];
}

export function addToWishlist(
  product
) {

  const user =
    getCurrentUser();

  if (!user) return;

  const wishlists =
    getAllWishlists();

  const userWishlist =
    wishlists[user.id] || [];

  const existingProduct =
    userWishlist.find(
      item => item.id === product.id
    );

  if (!existingProduct) {

    userWishlist.push(product);
  }

  wishlists[user.id] =
    userWishlist;

  saveAllWishlists(
    wishlists
  );
}

export function removeFromWishlist(
  productId
) {

  const user =
    getCurrentUser();

  if (!user) return;

  const wishlists =
    getAllWishlists();

  const userWishlist =
    wishlists[user.id] || [];

  const updatedWishlist =
    userWishlist.filter(
      item => item.id !== productId
    );

  wishlists[user.id] =
    updatedWishlist;

  saveAllWishlists(
    wishlists
  );
}
export function isInWishlist(
  productId
) {

  const wishlist =
    getWishlist();

  return wishlist.some(
    item => item.id === productId
  );
}
export function toggleWishlist(
  product
) {

  if (
    isInWishlist(product.id)
  ) {

    removeFromWishlist(
      product.id
    );

    return false;

  } else {

    addToWishlist(product);

    return true;
  }
}