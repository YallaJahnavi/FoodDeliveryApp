import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutUs.css";
import UserContext from "../utils/UserContext"; // Import context

const AboutUs = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext); // Access login state

  const handleBack = () => {
    navigate("/home");
  };

  const goToContact = () => {
    navigate("/home/contact");
  };

  // If not logged in, show logout message + Login Again button
  if (!isLoggedIn) {
    return (
      <div className="about-container text-center">
        <div className="logout-message text-red-600 text-xl font-semibold mb-4">
          User Logged Out Successfully
        </div>
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login Again
        </button>
      </div>
    );
  }

  // Show About content only if logged in
  return (
    <div className="aboutus-wrapper">
      <div className="aboutus-content">
        {/* 🔙 Back Button */}
        <button
          onClick={handleBack}
          className="mb-6 px-4 py-2 bg-yellow-200 text-black rounded hover:bg-yellow-300"
        >
          ⬅️ Back to Home
        </button>

        <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>

        <p className="text-lg mb-4">
          This Swiggy-inspired food delivery app is built with React.js. It features dynamic restaurant listings,
          cart management, user authentication, and more.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Features:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>🔍 Browse restaurants fetched via Swiggy API</li>
          <li>📱 User login and registration</li>
          <li>🛒 Cart functionality using Redux</li>
          <li>📦 Lazy loading for performance</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Tech Stack:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>React</li>
          <li>Redux Toolkit</li>
          <li>React Router</li>
          <li>Custom Hooks & Context API</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Developer Info:</h2>
        <p className="mb-1">👩‍💻 Jahnavi Yalla</p>
        <p className="mb-6">
          🔗{" "}
          <a
            href="https://github.com/YallaJahnavi/FoodDeliveryApp"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            GitHub Repo
          </a>
        </p>

        <button
          onClick={goToContact}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          📞 Contact Us
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
