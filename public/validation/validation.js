export const emailRegex =
 /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const phoneRegex =
 /^(070|080|081|090|091)\d{8}$/;
 
export const passwordRegex =
 /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
 
 /* CONTACT VALIDATION */

export const nameRegex =
  /^[A-Za-z\s]{3,50}$/;
  
// CONTACT

export function validateContactName(
  value
) {

  const name =
    value.trim();

  if (!name) {

    return "Name is required";
  }

  if (
    !nameRegex.test(name)
  ) {

    return "Enter a valid name";
  }

  return "";
}

export function validateContactEmail(
  value
) {

  const email =
    value.trim();

  if (!email) {

    return "Email is required";
  }

  if (
    !emailRegex.test(email)
  ) {

    return "Enter a valid email";
  }

  return "";
}

export function validateSubject(
  value
) {

  const subject =
    value.trim();

  if (!subject) {

    return "Subject is required";
  }

  if (
    subject.length < 5
  ) {

    return "Minimum 5 characters";
  }

  return "";
}

export function validateMessage(
  value
) {

  const message =
    value.trim();

  if (!message) {

    return "Message is required";
  }

  if (
    message.length < 10
  ) {

    return "Minimum 10 characters";
  }

  return "";
}