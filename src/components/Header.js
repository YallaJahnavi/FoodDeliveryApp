import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
import "./Header.css"; // Custom CSS for animation

const Header = () => {
  const navigate = useNavigate();
  const { loggedInUser, setUserName, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
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
    <div className="flex justify-between items-center px-6 py-4 bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      {/* Left: Logo + App Name + Animated Subtitle */}
      <div className="flex items-center gap-4">
        <img
          className="w-14 h-14 rounded-full object-cover shadow"
          src="https://t3.ftcdn.net/jpg/02/02/07/56/360_F_202075610_MGQKkqilBtXnLwMtWlSDvFrrW2kbYYgl.jpg"
          alt="Swiggy Logo"
        />
        <div>
          <p className="text-xl font-bold uppercase tracking-widest text-gray-500 font-semibold">
            WELCOME TO
          </p>
          <h1 className="text-2xl font-extrabold tracking-wide text-green-700 drop-shadow-sm">
            TASTY MEALS FEAST
          </h1>
          <p className="animated-subtitle text-xl italic text-gray-600 mt-1">
            Eater's Hunger.....😋
          </p>
        </div>
      </div>

      {/* Right: Navigation Links + Cart + Login */}
      <ul className="flex p-4 m-4 items-center gap-6 text-lg">
        <li>
          Online Status:{" "}
          <span className="text-xl">{isLoggedIn ? "✅" : "🔴"}</span>
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
            to="/home/my-orders"
            className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
          >
            My Orders
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
  );
};

export default Header;
