// Register.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../utils/localStorageUtils";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    dob: "",
    phone: "",
    address: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleRegister = () => {
    // Check for empty fields
    const isEmpty = Object.values(form).some((value) => value.trim() === "");
    if (isEmpty) {
      alert("Enter your details first");
      return;
    }

    // Phone number must be exactly 10 digits
    if (!/^\d{10}$/.test(form.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Email must be in correct @gmail.com format
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(form.email)) {
      alert("Please enter a valid Gmail address (example@gmail.com).");
      return;
    }

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

        {/* Form Fields */}
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
          <input
            type="date"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setForm({ ...form, dob: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
          <select
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
            defaultValue=""
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>

          {/* Register Button */}
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
