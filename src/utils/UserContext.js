import { createContext, useState } from "react";

// Create the context
const UserContext = createContext({
  loggedInUser: "",
  setUserName: () => {},
  isLoggedIn: true,
  setIsLoggedIn: () => {},
});

// Create a provider component
export const UserContextProvider = ({ children }) => {
  const [loggedInUser, setUserName] = useState("Guest");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
