document.addEventListener("DOMContentLoaded", function () {
    // ========== Navbar Mobile Toggle ==========
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // ========== Contact Form Submission ==========
    const form = document.getElementById("contact-form");
    const popup = document.getElementById("confirmation-popup");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent real submission for now
            popup.style.display = "flex";
            form.reset(); // Clear form after submit
        });
    }
});

// Function to close the popup
function closePopup() {
    document.getElementById("confirmation-popup").style.display = "none";
}