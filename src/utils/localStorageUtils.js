// localStorageUtils.js

// Save new user if not already existing
export const saveUser = (user) => {
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Prevent duplicate registration by username or email
  const alreadyExists = existingUsers.some(
    (u) => u.username === user.username || u.email === user.email
  );
  if (alreadyExists) return false;

  existingUsers.push(user);
  localStorage.setItem("users", JSON.stringify(existingUsers));

  // Store current user separately for profile access
  localStorage.setItem("currentUser", JSON.stringify(user));

  return true;
};

// Validate user during login
export const validateUser = ({ username, password }) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find((u) => u.username === username && u.password === password);
};

// (Optional utility) Get current logged-in/registered user
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};
