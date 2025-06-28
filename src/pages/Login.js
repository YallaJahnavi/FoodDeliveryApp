// Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateUser } from "../utils/localStorageUtils";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    const valid = validateUser(form);
    if (valid) {
      alert("Login successful!");
      navigate("/home");
    } else {
      alert("Invalid credentials. Please register first.");
      navigate("/register");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center border-2 border-black">
      <h1 className="text-xl mb-5">LOGIN</h1>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="border border-black p-2"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-black p-2"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          className="border-2 border-black px-6 py-1"
          onClick={handleLogin}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;