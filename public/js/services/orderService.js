export function getOrders() {

  return JSON.parse(
    localStorage.getItem(
      "orders"
    )
  ) || [];
}

export function saveOrder(
  order
) {

  const orders =
    getOrders();

  orders.push(order);

  localStorage.setItem(
    "orders",
    JSON.stringify(orders)
  );
}