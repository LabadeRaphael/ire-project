export function getCurrentUser() {

  return JSON.parse(
    localStorage.getItem(
      "currentUser"
    )
  );
}

export function getAllOrders() {

  return JSON.parse(
    localStorage.getItem(
      "orders"
    )
  ) || {};
}

export function saveAllOrders(
  orders
) {

  localStorage.setItem(

    "orders",

    JSON.stringify(
      orders
    )

  );
}

export function getOrders() {

  const user =
    getCurrentUser();

  if (!user) return [];

  const orders =
    getAllOrders();

  return (
    orders[user.id] || []
  );
}

export function saveOrder(
  order
) {

  const user =
    getCurrentUser();

  if (!user) return;

  const orders =
    getAllOrders();

  const userOrders =
    orders[user.id] || [];

  userOrders.push(
    order
  );

  orders[user.id] =
    userOrders;

  saveAllOrders(
    orders
  );
}