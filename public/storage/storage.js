export function saveUser(user) {

  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  users.push(user);

  localStorage.setItem(
    "users",
    JSON.stringify(users)
  );
}
export function getUsers() {

  return JSON.parse(
    localStorage.getItem("users")
  ) || [];
}

export function saveCurrentUser(user) {

  localStorage.setItem(
    "currentUser",
    JSON.stringify(user)
  );
}