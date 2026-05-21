document.addEventListener("DOMContentLoaded", () => {

    // ========== Navbar Mobile Toggle ==========
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
  
  // orderTotal.textContent = `₦ ${total}`;
  function updateOrderSummary() {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const orderItems = document.getElementById("orderItems");
    const orderTotal = document.getElementById("orderTotal");

    let total = 0;

    orderItems.innerHTML = cart.map(item => {
        total += Number(item.price.slice(1)) * item.qty;
        return `<p>${item.name} x ${item.qty} - ₦${Number(item.price.slice(1)) * item.qty}</p>`;
    }).join("");

    orderTotal.textContent = `₦${ parseInt(total)}`;
    localStorage.setItem("total", JSON.stringify(total));
}

// Call on page load
updateOrderSummary();
  
  document.getElementById("checkoutForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    //   const formData = new FormData(e.target);
    //   const order = {
    //     items: cart,
    //     shipping: Object.fromEntries(formData.entries()),
    //     total
    //   };
  
    //   try {
    //     const res = await fetch("/api/checkout", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(order)
    //     });
  
    //     const data = await res.json();
    //     if (data.success) {
    //       alert("Order placed successfully!");
    //       localStorage.removeItem("cart");
    //       window.location.href = "/account.html";
    //     } else {
    //       alert("Something went wrong.");
    //     }
    //   } catch (err) {
    //     console.error(err);
    //     alert("Server error.");
    //   }
    // });

    document.getElementById('paystackBtn').addEventListener('click', function () {
      const total = JSON.parse(localStorage.getItem("total"))
        let email = document.getElementById("email").value 
    let handler = PaystackPop.setup({
      key: 'pk_test_b612c61da98108077cc39ca361bb2a4a52655d46', // Replace with your public key
      email: email || "user@gmail.com",   // Customer's email
      amount: parseInt(total*100),                  // Amount in kobo (5000 NGN = 500000 kobo)
      currency: 'NGN',                  // Currency
      ref: '' + Math.floor((Math.random() * 1000000000) + 1), // Unique reference
      onClose: function () {
        alert('Payment window closed.');
      },
      callback: function (response) {
        alert('Payment complete! Reference: ' + response.reference);
        // You can send `response.reference` to your server for verification
      }
    });

        handler.openIframe()
        });
  });
})
  
  