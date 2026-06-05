import {
  renderNavbar
}
from "./components/navbar.js";

import {
  getOrders
}
from "./services/orderService.js";

renderNavbar();

const ordersContainer =
  document.getElementById(
    "ordersContainer"
  );

function renderOrders() {

  const orders =
    getOrders();

  if (
    orders.length === 0
  ) {

    ordersContainer.innerHTML =
      `

      <div class="empty-orders">

        <h3>

          No Orders Yet

        </h3>

        <p>

          Your completed
          orders will appear
          here.

        </p>

      </div>

    `;

    return;
  }

  ordersContainer.innerHTML =
    orders.map(order => `

      <div
        class="order-card"
      >

        <div
          class="order-top"
        >

          <h3>

            Order #${order.id}

          </h3>

          <span>

            ${order.createdAt}

          </span>

        </div>

        <div
          class="order-items"
        >

          ${order.products
            .map(product => `

            <p>

              ${product.title}
              ×
              ${product.quantity}

            </p>

          `)
            .join("")}

        </div>

        <div
          class="order-footer"
        >

          <strong>

            ₦${order.total}

          </strong>

          <span>

            ${order.status}

          </span>

        </div>

      </div>

    `).join("");
}

renderOrders();