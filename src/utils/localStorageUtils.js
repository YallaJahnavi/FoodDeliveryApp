// localStorageUtils.js
export const saveUser = (user) => {
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  const alreadyExists = existingUsers.some(
    (u) => u.username === user.username || u.email === user.email
  );
  if (alreadyExists) return false;
  existingUsers.push(user);
  localStorage.setItem("users", JSON.stringify(existingUsers));
  return true;
};

export const validateUser = ({ username, password }) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find((u) => u.username === username && u.password === password);
};