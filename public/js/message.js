export const displayMessage = (
  message,
  type
) => {

  messageBox.textContent = message;

  messageBox.className = "";

  if(type === "success"){

    messageBox.classList.add(
      "messageSuccess"
    );

  } else if(type === "error"){

    messageBox.classList.add(
      "messageError"
    );
  }

  messageBox.style.display = "block";

  setTimeout(() => {

    messageBox.style.display = "none";

  }, 3000);
};