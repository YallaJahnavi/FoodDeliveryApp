// UserContext.js
import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "",
  setUserName: () => {},
  isLoggedIn: true,
  setIsLoggedIn: () => {},
});

export default UserContext;
