import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const { loggedInUser, setUserName, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  // ✅ FIXED: Get cartItems from store.cart.items
  const cartItems = useSelector((store) => store.cart.items);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      setUserName("");
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
      setUserName("Jahnavi");
      navigate("/login");
    }
  };

  const activeClass = "text-green-600 font-bold border-b-2 border-green-600";
  const inactiveClass = "hover:text-green-500";

  return (
    <div className="flex justify-between items-start bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container p-4">
        <img
          className="logo-img"
          src="https://t3.ftcdn.net/jpg/02/02/07/56/360_F_202075610_MGQKkqilBtXnLwMtWlSDvFrrW2kbYYgl.jpg"
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
              to="/home/about"
              className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/home/contact"
              className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            >
              Contact Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/home/cart"
              className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            >
              Cart - ({cartItems.length || 0} items)
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
