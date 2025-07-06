// Header.js
import { useContext, useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
import "./Header.css"; // Custom CSS for animation

const Header = () => {
  const navigate = useNavigate();
  const { loggedInUser, setUserName, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const handleLogout = () => {
    setUserName("");
    setIsLoggedIn(false);
    setShowDropdown(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUserName("Jahnavi");
    navigate("/login");
  };

  const activeClass = "text-green-600 font-bold border-b-2 border-green-600";
  const inactiveClass = "hover:text-green-500";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      {/* Left: Logo + App Name */}
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
            📌Eater's Hunger.....🍴🤤
          </p>
        </div>
      </div>

      {/* Right: Navigation + Dropdown */}
      <ul className="flex p-4 m-4 items-center gap-6 text-lg relative">
        <li>
          Online Status: <span className="text-xl">{isLoggedIn ? "✅" : "🔴"}</span>
        </li>

        <li>
          <NavLink
            to="/home/about"
            className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
          >
            About Us🧑‍🧑‍🧒‍🧒
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/home/contact"
            className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
          >
            Contact Us📞
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/home/my-orders"
            className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
          >
            My Orders📜
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/home/cart"
            className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
          >
            Cart - ({cartItems.length || 0} items)🛒
          </NavLink>
        </li>

        {/* 👤 Dropdown with ▼ and Logout inside */}
        <li className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown((prev) => !prev)}
            className="text-2xl flex items-center gap-1 hover:opacity-80 focus:outline-none"
            title="Account"
          >
            <span>👤</span>
            <span className="text-sm">▼</span>
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-44 bg-white rounded shadow-md border z-50 text-base">
              <NavLink
                to="/home/profile"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                onClick={() => setShowDropdown(false)}
              >
                Profile
              </NavLink>
            
              <hr className="my-1 border-gray-200" />
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="block w-full text-left px-4 py-2 hover:bg-green-100 text-green-600"
                >
                  Login
                </button>
              )}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
