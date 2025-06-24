// src/utils/UserContext.js
import { createContext, useState } from "react";

const UserContext = createContext({
  loggedInUser: "",
  setUserName: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [loggedInUser, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setUserName,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
