// Register.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../utils/localStorageUtils";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = () => {
    const success = saveUser(form);
    if (success) {
      alert("Registered successfully!");
      navigate("/login");
    } else {
      alert("User already exists. Please choose another.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center border-2 border-black">
      <h1 className="text-xl mb-5">REGISTER</h1>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="border border-black p-2"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email ID"
          className="border border-black p-2"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-black p-2"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          className="border-2 border-black px-6 py-1"
          onClick={handleRegister}
        >
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Register;