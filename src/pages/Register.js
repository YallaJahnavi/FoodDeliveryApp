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
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2lzMTYwNjItaW1hZ2Uta3d2eWZrd3IuanBn.jpg')",
      }}
    >
      {/* Card */}
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-xl p-10 w-full max-w-md relative">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 text-sm bg-gray-200 px-3 py-1 rounded shadow hover:bg-gray-300"
        >
          ← Back
        </button>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Register
        </h1>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email ID"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded shadow-md transition"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
