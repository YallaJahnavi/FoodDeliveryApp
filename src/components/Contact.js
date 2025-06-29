import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext"; // ✅ For login state

const Contact = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext); // ✅ Track login status

  const [formData, setFormData] = useState({
    name: "",
    message: "",
    ratings: "",
    suggestions: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/mgvyrgkz", {
        // 🔁 Replace with your actual Formspree endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", message: "", ratings: "", suggestions: "" });
      } else {
        alert("❌ Failed to send message.");
      }
    } catch (err) {
      alert("🚫 Error sending message.");
    }
  };

  // 🔴 If user is logged out — show only message (no back button)
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
        <h2 className="text-2xl font-semibold text-red-500 mt-20">
          User Logged Out Successfully
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6 relative">
      {/* ✅ Back button visible only when logged in */}
      <button
        onClick={() => navigate("/home")}
        className="absolute top-4 left-4 bg-yellow-100 px-3 py-1 rounded hover:bg-yellow-200"
      >
        ⬅️ Back to Home
      </button>

      <h1 className="text-4xl font-bold mb-8 mt-16 text-center">Contact Us</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />

        <input
          type="text"
          name="ratings"
          placeholder="Ratings (1–5)"
          value={formData.ratings}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />

        <textarea
          name="suggestions"
          placeholder="Suggestions"
          value={formData.suggestions}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
