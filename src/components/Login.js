// src/components/Login.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUserName, setIsLoggedIn } = useContext(UserContext);
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    setUserName(credentials.username);
    setIsLoggedIn(true);
    navigate("/app"); // ✅ GO TO HOME PAGE
  };

  return (
    <div className="landing-container">
      <div className="landing-card">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            placeholder="Username"
            className="border p-2 rounded"
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            required
          />
          <input
            placeholder="Password"
            type="password"
            className="border p-2 rounded"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            required
          />
          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
