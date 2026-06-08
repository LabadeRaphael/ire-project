import { showToast } from "../components/toast.js";

export function getCurrentUser() {

  return JSON.parse(
    localStorage.getItem(
      "currentUser"
    )
  );
}

export function requireLogin() {

  const currentUser =
    getCurrentUser();

  if (!currentUser) {
    showToast(
      "Please login first",
      "warning"
    );
    setTimeout(() => {
        
        window.location.href =
          "./login.html";
    }, 2000);

    return false;
  }

  return true;
}