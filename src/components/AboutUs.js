import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutUs.css";
import UserContext from "../utils/UserContext"; // ✅ Import context

const AboutUs = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext); // ✅ Access login state

  const handleBack = () => {
    navigate("/home"); // Or navigate("/home") if you prefer
  };

  const goToContact = () => {
    navigate("/home/contact");
  };

  // ✅ If not logged in, show only logout message (no back button)
  if (!isLoggedIn) {
  return (
    <div className="about-container">
      <div className="logout-message">User Logged Out Successfully</div>
    </div>
  );
}


  // ✅ Show About content only if logged in
  return (
    <div className="about-container">
      {/* 🔙 Back Button */}
      <button onClick={handleBack} className="back-button">
        ⬅️ Back to Home
      </button>

      <h1>About Our Food Delivery App</h1>
      <p>
        This Swiggy-inspired food delivery app is built with React.js. It features dynamic restaurant listings, cart management, user authentication, and more.
      </p>

      <h2>Features:</h2>
      <ul>
        <li>🔍 Browse restaurants fetched via Swiggy API</li>
        <li>📱 User login and registration</li>
        <li>🛒 Cart functionality using Redux</li>
        <li>📦 Lazy loading for performance</li>
      </ul>

      <h2>Tech Stack:</h2>
      <ul>
        <li>React</li>
        <li>Redux Toolkit</li>
        <li>React Router</li>
        <li>Custom Hooks & Context API</li>
      </ul>

      <h2>Developer Info:</h2>
      <p>👩‍💻 Jahnavi Yalla</p>
      <p>
        🔗{" "}
        <a
          href="https://github.com/YallaJahnavi/FoodDeliveryApp"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repo
        </a>
      </p>

      <button onClick={goToContact} className="contact-button">
        📞 Contact Us
      </button>
    </div>
  );
};

export default AboutUs;
