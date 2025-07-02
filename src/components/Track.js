// Track.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import deliveryAnimation from "../assets/delivery.json"; // ✅ Correct path to your animation

const Track = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        backgroundColor: "#f8f9fa",
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
        Back to Home
      </button>

      {/* 📢 Message */}
      <h1 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "1.5rem" }}>
        Your order is on the way...
      </h1>

      {/* 🚚 Lottie Delivery Animation */}
      <div style={{ width: "300px" }}>
        <Lottie animationData={deliveryAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Track;
