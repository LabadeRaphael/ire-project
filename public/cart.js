document.addEventListener("DOMContentLoaded", function () {
    // ========== Navbar Mobile Toggle ==========
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const checkOutBtn = document.getElementById('checkoutBtn');
    const cartoutMessage = document.getElementById('cartoutMessage');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
    let cart = JSON.parse(localStorage.getItem("cartItems"))
    checkOutBtn.addEventListener("click", () => {
        if (cart.length > 0) {
            //   checkOutBtn.classList.remove("disable")
            window.location.href="./checkout.html"
        } else {
              cartoutMessage.textContent = "Shop items";
          cartoutMessage.classList.add("show");
        }
    })
     setTimeout(() => {
            cartoutMessage.classList.remove("show");
          }, 4000); 
    if (cart) {
        
        console.log(cart);
    }
      if (cart.length > 0) {
              checkOutBtn.classList.remove("disable")
        } else {
            // alert("shop items")
            checkOutBtn.classList.add("disable")

        }
    const cartItems = document.getElementById("cartItems");
    const totalPriceEl = document.getElementById("totalPrice");

    function formatPrice(naira) {
        return `₦${naira.toLocaleString()}`;
    }

    function renderCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            const subtotal = item.price.slice(1,) * item.qty;
            total += subtotal;
            console.log();
            

            const div = document.createElement("div");
            div.className = "cart-item";
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>${formatPrice(item.price.slice(1,))} x ${item.qty}</p>
                </div>
                <div class="quantity-control">
                    <button onclick="changeQuantity(${index}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                </div>
            `;
            cartItems.appendChild(div);
        });

        totalPriceEl.textContent = formatPrice(total);
    }

    // Move changeQuantity to be a function in the scope of this event listener
    window.changeQuantity = function(index, delta) {
        cart[index].qty += delta;
        if (cart[index].qty <= 0) cart.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(cart));
        localStorage.setItem("cartCounter", JSON.stringify(cart.length))
        renderCart();
    }
    // Initial render
    renderCart();




});
  