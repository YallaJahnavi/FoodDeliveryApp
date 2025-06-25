import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // ✅ Importing external CSS

const Register = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const alreadyExists = users.some(
      (u) => u.username === userDetails.username
    );
    if (alreadyExists) {
      alert("Username already exists. Please choose a different one.");
      return;
    }
    users.push(userDetails);
    localStorage.setItem("users", JSON.stringify(users));
    console.log("Registered User:", userDetails);
    navigate("/login");
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">SignUp</h2>
        <input
          className="register-input"
          placeholder="Username"
          onChange={(e) =>
            setUserDetails({ ...userDetails, username: e.target.value })
          }
          required
        />
        <input
          className="register-input"
          placeholder="Email"
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
          required
        />
        <input
          className="register-input"
          placeholder="Password"
          type="password"
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
          required
        />
        <button className="register-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
