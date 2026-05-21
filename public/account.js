// client/account.js

const authBox = document.getElementById("authBox");
const dashboard = document.getElementById("dashboard");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const orderList = document.getElementById("orderList");

// Base API URL
const API = "http://localhost:5000/api";

function showDashboard(user) {
  authBox.style.display = "none";
  dashboard.style.display = "block";
  userName.textContent = user.name;
  userEmail.textContent = user.email;
  fetchOrders(user.id);
}

function saveUser(data) {
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));
  showDashboard(data.user);
}

function loadUser() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  if (token && user) showDashboard(user);
}

function register() {
  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  fetch(`${API}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  })
  .then(res => res.json())
  .then(saveUser)
  .catch(err => alert("Registration error"));
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(saveUser)
  .catch(err => alert("Login error"));
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  location.reload();
}

function fetchOrders(userId) {
  fetch(`${API}/orders/${userId}`)
    .then(res => res.json())
    .then(orders => {
      orderList.innerHTML = "";
      if (orders.length === 0) {
        orderList.innerHTML = "<li>No orders yet.</li>";
      } else {
        orders.forEach(order => {
          const li = document.createElement("li");
          li.textContent = `Order on ${new Date(order.date).toLocaleDateString()} - ₦${order.total}`;
          orderList.appendChild(li);
        });
      }
    });
}

document.addEventListener("DOMContentLoaded", loadUser);
