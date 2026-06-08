import { getWishlist } from "../services/wishlistsService.js";

export function renderNavbar() {

  const navbar =
    document.getElementById("navbar");

  /* GET USER */

  const currentUser =
    JSON.parse(
      localStorage.getItem(
        "currentUser"
      )
    );

  /* GET CART */

  const carts =
    JSON.parse(
      localStorage.getItem(
        "carts"
      )
    ) || {};

  const cart =
    currentUser
      ? carts[currentUser.id] || []
      : [];

  const wishlist = getWishlist();
  navbar.innerHTML = `

    <nav class="nav-wrapper">

      <!-- LOGO -->

      <div class="logo">

        <a href="./index.html">
          DreamWare
        </a>

      </div>

      <!-- NAV LINKS -->

      <ul class="nav-links" id="navLinks">

        <li>
          <a href="./index.html">
            Home
          </a>
        </li>

        <li>
          <a href="./shop.html">
            Shop
          </a>
        </li>

        <li>
          <a href="./about.html">
            About
          </a>
        </li>

        <li>
          <a href="./contact.html">
            Contact
          </a>
        </li>

      </ul>

      <!-- ACTIONS -->

      <div class="nav-actions">

        <!-- WISHLIST -->

      <a
        href="./wishlist.html"
        class="icon-link"
      >

        <button class="icon-btn">

          ❤️

          <span class="badge">
            ${wishlist.length}
          </span>

        </button>

      </a>

      <!-- CART -->
        
      <a
        href="./cart.html"
        class="icon-link"
      >

      <button class="icon-btn">
      
        🛒

        <span class="badge">
          ${cart.length}
        </span>

      </button>

      </a>

        <!-- USER -->

        ${currentUser

      ?

      `

          <div class="profile">

            <button
              class="profile-btn"
              id="profileBtn"
            >

              ${currentUser.fullName
        .charAt(0)
        .toUpperCase()
      }

            </button>

            <div
              class="dropdown"
              id="dropdown"
            >

              <p>
                ${currentUser.fullName}
              </p>
             <a
              href="./orders.html"
               class="dropdown-link"
            >

              Orders

            </a>


              <button id="logoutBtn">
                Logout
              </button>

            </div>

          </div>

          `

      :

      `

          <a
            href="./login.html"
            class="login-btn"
          >

            Login

          </a>

          `
    }

        <!-- MOBILE -->

        <button
          class="menu-btn"
          id="menuBtn"
        >

          ☰

        </button>

      </div>

    </nav>
  `;

  /* MOBILE MENU */

  const menuBtn =
    document.getElementById(
      "menuBtn"
    );

  const navLinks =
    document.getElementById(
      "navLinks"
    );

  menuBtn?.addEventListener(
    "click",
    () => {

      navLinks.classList.toggle(
        "show-menu"
      );
    }
  );

  /* PROFILE DROPDOWN */

  const profileBtn =
    document.getElementById(
      "profileBtn"
    );

  const dropdown =
    document.getElementById(
      "dropdown"
    );

  profileBtn?.addEventListener(
    "click",
    () => {

      dropdown.classList.toggle(
        "show-dropdown"
      );
    }
  );

  /* LOGOUT */

  const logoutBtn =
    document.getElementById(
      "logoutBtn"
    );

  logoutBtn?.addEventListener(
    "click",
    () => {

      localStorage.removeItem(
        "currentUser"
      );

      window.location.href =
        "./login.html";
    }
  );
  
}