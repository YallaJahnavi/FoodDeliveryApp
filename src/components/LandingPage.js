// src/components/LandingPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-card">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome to FoodDelivery</h1>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/register")}
            className="btn-primary"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate("/login")}
            className="btn-primary"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
