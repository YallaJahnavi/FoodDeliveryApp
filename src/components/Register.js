// src/components/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ username: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can store or validate userDetails here (use localStorage or API)
    console.log("Registered User:", userDetails);
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} required />
        <input placeholder="Email" onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} required />
        <input placeholder="Password" type="password" onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
