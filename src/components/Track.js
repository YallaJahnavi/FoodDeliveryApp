// Track.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import deliveryAnimation from "../assets/delivery.json"; // ✅ Ensure this file exists

const Track = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url('https://t4.ftcdn.net/jpg/02/92/20/37/360_F_292203735_CSsyqyS6A4Z9Czd4Msf7qZEhoxjpzZl1.jpg')`, // ✅ Replace with your own link if needed
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* 🔙 Top-Left Button */}
      <button
        onClick={() => navigate("/home")}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "10px 20px",
          fontSize: "14px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}
      >
        ⬅️ Back to Home
      </button>

      {/* 📢 Message */}
      <h1 style={{ fontSize: "2rem", color: "#fff", marginBottom: "1.5rem", textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}>
        Your order is on the way...
      </h1>

      {/* 🚚 Lottie Delivery Animation */}
      <div style={{ width: "700px", height: "700px" }}>
        <Lottie animationData={deliveryAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Track;
