document.addEventListener("DOMContentLoaded", function () {
  // ========== Navbar Mobile Toggle ==========
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // Client/home.js
  const shopButton = document.querySelector(".btn");

  // Animate button on click
  if (shopButton) {
    shopButton.addEventListener("click", (e) => {
      shopButton.classList.add("clicked");
      setTimeout(() => shopButton.classList.remove("clicked"), 200);
    });
  }

  // You can extend with scroll reveal or cart preview later

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
});
