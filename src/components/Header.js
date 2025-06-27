import { LOGO_URL } from "../utils/constants";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { loggedInUser, setUserName, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  // ✅ Get cart items from Redux store
  const cartItems = useSelector((store) => store.cart.items);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      setUserName("");        // Clear username on logout
      setIsLoggedIn(false);   // Update login status

      //alert("User Logged out Successfully");
    } else {
      setIsLoggedIn(true);    
      setUserName("Jahnavi"); // Set default username on login
    }
  };

  // 🔷 Styling for active links
  const activeClass = "text-green-600 font-bold border-b-2 border-green-600";
  const inactiveClass = "hover:text-green-500";

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="app logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 items-center gap-4">
          <li>
            Online Status:{" "}
            <span style={{ fontSize: "20px" }}>{isLoggedIn ? "✅" : "🔴"}</span>
          </li>

          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            >
              Contact Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/grocery"
              className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            >
              Grocery
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            >
              Cart - ({cartItems.length} items)
            </NavLink>
          </li>

          <li>
            <button
              className="px-4 py-1 bg-green-200 rounded hover:bg-green-300"
              onClick={handleLoginLogout}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>

          {/* Username removed from here */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
