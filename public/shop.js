document.addEventListener("DOMContentLoaded", function () {
  // ========== Navbar Mobile Toggle ==========
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".dots");
  let currentSlide = 0;
  let slideInterval;

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dots span");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  function goToSlide(index) {
    showSlide(index);
    resetInterval();
  }

  function startAutoPlay() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startAutoPlay();
  }

  document.querySelector(".next").addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  document.querySelector(".prev").addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  showSlide(currentSlide);
  startAutoPlay();

  const products = [
    {
      id: 1,
      name: "Classic T-Shirt",
      category: "clothes",
      price: "$19.99",
      image: "../public/images/tshirt1.jpg",
    },
    {
      id: 2,
      name: "Classic T-Shirt",
      category: "clothes",
      price: "$19.99",
      image: "../public/images/tshirt2.jpg",
    },
    {
      id: 3,
      name: "Classic T-Shirt",
      category: "clothes",
      price: "$19.99",
      image: "../public/images/tshirt3.jpg",
    },
    {
      id: 4,
      name: "Classic T-Shirt",
      category: "clothes",
      price: "$19.99",
      image: "../public/images/tshirt4.jpg",
    },
    {
      id: 5,
      name: "Classic T-Shirt",
      category: "clothes",
      price: "$19.99",
      image: "../public/images/tshirt5.jpg",
    },
    {
      id: 6,
      name: "Classic T-Shirt",
      category: "clothes",
      price: "$19.99",
      image: "../public/images/tshirt6.jpg",
    },
    {
      id: 7,
      name: "Classic T-Shirt",
      category: "clothes",
      price: "$19.99",
      image: "../public/images/tshirt7.jpg",
    },
    {
      id: 8,
      name: "Classic T-Shirt",
      category: "clothes",
      price: "$19.99",
      image: "../public/images/tshirt8.jpg",
    },

    {
      id: 9,
      name: "Soft Cotton Pajamas",
      category: "pajamas",
      price: "$29.99",
      image: "../public/images/pj1.jpg",
    },
    {
      id: 10,
      name: "Soft Cotton Pajamas",
      category: "pajamas",
      price: "$29.99",
      image: "../public/images/pj2.jpg",
    },
    {
      id: 11,
      name: "Soft Cotton Pajamas",
      category: "pajamas",
      price: "$29.99",
      image: "../public/images/pj3.jpg",
    },
    {
      id: 12,
      name: "Soft Cotton Pajamas",
      category: "pajamas",
      price: "$29.99",
      image: "../public/images/pj4.jpg",
    },
    {
      id: 13,
      name: "Soft Cotton Pajamas",
      category: "pajamas",
      price: "$29.99",
      image: "../public/images/pj5.jpg",
    },
    {
      id: 14,
      name: "Soft Cotton Pajamas",
      category: "pajamas",
      price: "$29.99",
      image: "../public/images/pj6.jpg",
    },
    {
      id: 15,
      name: "Soft Cotton Pajamas",
      category: "pajamas",
      price: "$29.99",
      image: "../public/images/pj7.jpg",
    },
    {
      id: 15,
      name: "Soft Cotton Pajamas",
      category: "pajamas",
      price: "$29.99",
      image: "../public/images/pj8.jpg",
    },
    {
      id: 16,
      name: "Soft Cotton Pajamas",
      category: "pajamas",
      price: "$29.99",
      image: "../public/images/pj9.jpg",
    },
    {
      id: 17,
      name: "Soft Cotton Pajamas",
      category: "pajamas",
      price: "$29.99",
      image: "../public/images/pj10.jpg",
    },
    {
      id: 18,
      name: "Soft Cotton Pajamas",
      category: "pajamas",
      price: "$29.99",
      image: "../public/images/pj11.jpg",
    },
    {
      id: 19,
      name: "Ladies Underwear Set",
      category: "pajamas",
      price: "$14.99",
      image: "../public/images/pj12.jpg",
    },
    {
      id: 20,
      name: "Ladies Underwear Set",
      category: "pajamas",
      price: "$14.99",
      image: "../public/images/pj13.jpg",
    },
    {
      id: 21,
      name: "Ladies Underwear Set",
      category: "pajamas",
      price: "$14.99",
      image: "../public/images/pj16.jpg",
    },
    {
      id: 22,
      name: "Ladies Underwear Set",
      category: "pajamas",
      price: "$14.99",
      image: "../public/images/pj14.jpg",
    },
    {
      id: 23,
      name: "Ladies Underwear Set",
      category: "pajamas",
      price: "$14.99",
      image: "../public/images/pj17.jpg",
    },
    {
      id: 24,
      name: "Ladies Underwear Set",
      category: "underwear",
      price: "$14.99",
      image: "../public/images/pant1.jpg",
    },
    {
      id: 25,
      name: "Ladies Underwear Set",
      category: "underwear",
      price: "$14.99",
      image: "../public/images/pant2.jpg",
    },
    {
      id: 26,
      name: "Ladies Underwear Set",
      category: "underwear",
      price: "$14.99",
      image: "../public/images/pant3.jpg",
    },
    {
      id: 27,
      name: "Ladies Underwear Set",
      category: "underwear",
      price: "$14.99",
      image: "../public/images/pant4.jpg",
    },
    {
      id: 28,
      name: "Ladies Underwear Set",
      category: "underwear",
      price: "$14.99",
      image: "../public/images/pant5.jpg",
    },
    {
      id: 29,
      name: "Ladies Underwear Set",
      category: "underwear",
      price: "$14.99",
      image: "../public/images/pant6.jpg",
    },
    {
      id: 30,
      name: "Ladies Underwear Set",
      category: "underwear",
      price: "$14.99",
      image: "../public/images/pant7.jpg",
    },
    {
      id: 31,
      name: "Ladies Underwear Set",
      category: "underwear",
      price: "$14.99",
      image: "../public/images/pant8.jpg",
    },
    {
      id: 32,
      name: "Brallete",
      category: "underwear",
      price: "$14.99",
      image: "../public/images/brallete1.jpg",
    },
    {
      id: 33,
      name: "Brallete",
      category: "Underware",
      price: "$34.99",
      image: "../public/images/brallete2.jpg",
    },
    {
      id: 34,
      name: "Brallete",
      category: "underware",
      price: "$34.99",
      image: "../public/images/brallete3.jpg",
    },
    {
      id: 35,
      name: "Brallete",
      category: "underware",
      price: "$34.99",
      image: "../public/images/brallete4.jpg",
    },
    {
      id: 36,
      name: "Brallete",
      category: "underware",
      price: "$34.99",
      image: "../public/images/brallete5.jpg",
    },
    {
      id: 37,
      name: "Bra",
      category: "underware",
      price: "$34.99",
      image: "../public/images/bra.jpg",
    },
    {
      id: 38,
      name: "Bra",
      category: "underware",
      price: "$34.99",
      image: "../public/images/bra2.jpg",
    },
    {
      id: 39,
      name: "Bra",
      category: "underware",
      price: "$34.99",
      image: "../public/images/bra3.jpg",
    },
    {
      id: 40,
      name: "Bra",
      category: "underware",
      price: "$34.99",
      image: "../public/images/bra4.jpg",
    },
    {
      id: 41,
      name: "crop top",
      category: "clothes",
      price: "$34.99",
      image: "../public/images/top4.jpg",
    },
    {
      id: 42,
      name: "Crop Top",
      category: "clothes",
      price: "$34.99",
      image: "../public/images/top3.jpg",
    },
    {
      id: 43,
      name: "Crop Top",
      category: "clothes",
      price: "$34.99",
      image: "../public/images/top2.jpg",
    },
    {
      id: 44,
      name: "Men's Boxer Briefs",
      category: "underwear",
      price: "$12.99",
      image: "../public/images/boxer.jpg",
    },
    {
      id: 45,
      name: "Men's Boxer Briefs",
      category: "underwear",
      price: "$12.99",
      image: "../public/images/boxer4.jpg",
    },
    {
      id: 46,
      name: "Men's Boxer Briefs",
      category: "underwear",
      price: "$12.99",
      image: "../public/images/boxer5.jpg",
    },
    {
      id: 47,
      name: "Men's Boxer Briefs",
      category: "underwear",
      price: "$12.99",
      image: "../public/images/singlet1.jpg",
    },
    {
      id: 48,
      name: "Men's Boxer Briefs",
      category: "underwear",
      price: "$12.99",
      image: "../public/images/singlet2.jpg",
    },
    {
      id: 49,
      name: "Men's Boxer Briefs",
      category: "underwear",
      price: "$12.99",
      image: "../public/images/boxer9.jpg",
    },
    {
      id: 50,
      name: "Men's Boxer Briefs",
      category: "underwear",
      price: "$12.99",
      image: "../public/images/singlet3.jpg",
    },
    {
      id: 51,
      name: "Men's Boxer Briefs",
      category: "underwear",
      price: "$12.99",
      image: "../public/images/boxer8.jpg",
    },
    {
      id: 52,
      name: "Men's Boxer Briefs",
      category: "underwear",
      price: "$12.99",
      image: "../public/images/boxer10.jpg",
    },
    {
      id: 53,
      name: "Men's Boxer Briefs",
      category: "underwear",
      price: "$12.99",
      image: "../public/images/boxer11.jpg",
    },
    {
      id: 54,
      name: "Men's Boxer Briefs",
      category: "underwear",
      price: "$12.99",
      image: "../public/images/boxer12.jpg",
    },
    {
      id: 55,
      name: "Slim Fit Shirt",
      category: "jean",
      price: "$24.99",
      image: "../public/images/jean1.jpg",
    },
    {
      id: 56,
      name: "Slim Fit Shirt",
      category: "jean",
      price: "$24.99",
      image: "../public/images/jean2.jpg",
    },
    {
      id: 57,
      name: "Slim Fit Shirt",
      category: "jean",
      price: "$24.99",
      image: "../public/images/jean3.jpg",
    },
    {
      id: 58,
      name: "Maxi-skirt",
      category: "jean",
      price: "$24.99",
      image: "../public/images/jean4.jpg",
    },
    {
      id: 59,
      name: "Maxi-skirt",
      category: "jean",
      price: "$24.99",
      image: "../public/images/jean5.jpg",
    },
    {
      id: 60,
      name: "Black baggy-jean",
      category: "jean",
      price: "$24.99",
      image: "../public/images/jean6.jpg",
    },
    {
      id: 61,
      name: "jean",
      category: "jean",
      price: "$24.99",
      image: "../public/images/jean7.jpg",
    },
    {
      id: 62,
      name: "Slim Fit Shirt",
      category: "jean",
      price: "$24.99",
      image: "../public/images/jean8.jpg",
    },
    {
      id: 63,
      name: "Slim Fit Shirt",
      category: "jean",
      price: "$24.99",
      image: "../public/images/jean9.jpg",
    },
    {
      id: 64,
      name: "Jean",
      category: "jean",
      price: "$24.99",
      image: "../public/images/jean10.jpg",
    },
    {
      id: 65,
      name: "Jean",
      category: "jean",
      price: "$24.99",
      image: "../public/images/jean11.jpg",
    },
    {
      id: 66,
      name: "Jean",
      category: "jean",
      price: "$24.99",
      image: "../public/images/jean12.jpg",
    },
    {
      id: 67,
      name: "Basic-Top",
      category: "clothes",
      price: "$24.99",
      image: "../public/images/top9.jpg",
    },
    {
      id: 68,
      name: "Slim Fit Shirt",
      category: "clothes",
      price: "$24.99",
      image: "../public/images/top11.jpg",
    },
    {
      id: 69,
      name: "Slim Fit Shirt",
      category: "clothes",
      price: "$24.99",
      image: "../public/images/top10.jpg",
    },
    {
      id: 70,
      name: "Basic-top",
      category: "clothes",
      price: "$24.99",
      image: "../public/images/top12.jpg",
    },
    {
      id: 71,
      name: "Basic-top",
      category: "clothes",
      price: "$24.99",
      image: "../public/images/top13.jpg",
    },
    {
      id: 72,
      name: "Basic-top",
      category: "clothes",
      price: "$24.99",
      image: "../public/images/top14.jpg",
    },
    {
      id: 73,
      name: "Basic-top",
      category: "clothes",
      price: "$24.99",
      image: "../public/images/top15.jpg",
    },
    {
      id: 74,
      name: "Basic-top",
      category: "clothes",
      price: "$24.99",
      image: "../public/images/top16.jpg",
    },
    {
      id: 75,
      name: "Basic-top",
      category: "clothes",
      price: "$24.99",
      image: "../public/images/top17.jpg",
    },
  ];

  const productGrid = document.getElementById("productGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  let cartItems = [];

  function displayProducts(category) {
    productGrid.innerHTML = "";

    const filtered =
      category === "all"
        ? products
        : products.filter((product) => product.category === category);

    filtered.forEach((product) => {
      const card = document.createElement("div");
      const button = document.createElement("button");
      button.innerText = "add to cart";
      button.className = "addCartBtn";
      card.className = "product-card";
      card.innerHTML = `
                <img src="${product.image}" alt="${product.name}" />
                <div class="info">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}</p>
                        
                </div>
            `;
      card.appendChild(button);
      productGrid.appendChild(card);
      button.addEventListener("click", () => {
        const selectedId = product.id;
        const filterProduct = products.find(
          (product) => product.id === selectedId
        );
        console.log(filterProduct);
        if (cartItems.length > 0) {
        }
        const cartMessage = document.getElementById("cartMessage");
        const cartCounter = document.getElementById("cartCounter");
        const cartExisting = cartItems.find((item) => item.id === selectedId);
        if (cartExisting) {
          cartExisting.qty += 1;
          console.log("already existing", cartExisting);
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          cartMessage.textContent = "Cart Item Updated Successfully";
          cartMessage.classList.add("show");
        } else {
          cartMessage.textContent = "New Item added to cart Successfully";
          cartMessage.classList.add("show");

          setTimeout(() => {
            cartMessage.classList.remove("show");
          }, 2000); // Hide after 2 seconds
          const isInLS = JSON.parse(localStorage.getItem("cartItems"));
          console.log(isInLS);

          console.log(isInLS.length);
          if (isInLS.length > 0) {
            cartItems = [...isInLS];
          }

          cartItems.push({
            ...filterProduct,
            qty: 1,
          });

          localStorage.setItem("cartItems", JSON.stringify(cartItems));

          let getCartItems = JSON.parse(localStorage.getItem("cartItems"));
          console.log("new", cartItems);
          console.log(getCartItems.length);

          localStorage.setItem(
            "cartCounter",
            JSON.stringify(getCartItems.length)
          );
          console.log(getCartItems.length);

          let getCounter = JSON.parse(localStorage.getItem("cartCounter"));

          cartCounter.textContent = getCounter || 0;
        }
      });
    });
  }
  let getCounter = JSON.parse(localStorage.getItem("cartCounter"));

  cartCounter.textContent = getCounter || 0;

  filterButtons.forEach((btn) =>
    btn.addEventListener("click", () => {
      document.querySelector(".filter-btn.active")?.classList.remove("active");
      btn.classList.add("active");
      const category = btn.dataset.category || "all"; // Fallback to "all"
      displayProducts(category);
    })
  );

  // Initialize with all products

  displayProducts("all");
});
// document.addEventListener("DOMContentLoaded", () => {

// });
