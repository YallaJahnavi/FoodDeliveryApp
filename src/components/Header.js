import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
import "./Header.css"; // ✅ Import the CSS file we'll create

const Header = () => {
  const { loggedInUser, setUserName, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      setUserName("");
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
      setUserName("Jahnavi");
    }
  };

  const activeClass = "text-green-600 font-bold border-b-2 border-green-600";
  const inactiveClass = "hover:text-green-500";

  return (
    <div className="flex justify-between items-start bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container p-4">
        <img
          className="logo-img"
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/7e/0e/42/7e0e4245-9e3b-e243-2d77-c5b5016002a6/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/1200x630wa.png"
          alt="Swiggy Logo"
        />
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
