import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext"; // For login state
import "./Contact.css"; // For background image styling

const Contact = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext); // Track login status

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
      const res = await fetch("https://formspree.io/f/mwpbjnqg", {
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

  // If user is logged out — show logout message and Login Again button
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-white p-4">
        <div className="bg-yellow-50 p-10 rounded-lg shadow-md text-center">
          <h2 className="text-2xl text-red-600 mb-4">
            User Logged Out Successfully
          </h2>
          <button
            onClick={() => navigate("/login")}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login Again
          </button>
        </div>
      </div>
    );
  }

  // If user is logged in — show form and back button
  return (
    <div className="contact-wrapper">
      <div className="contact-content relative">
        <button
          onClick={() => navigate("/home")}
          className="absolute top-4 left-4 bg-yellow-100 px-3 py-1 rounded hover:bg-yellow-200"
        >
          ⬅️ Back to Home
        </button>

        <h1 className="text-4xl font-bold mb-8 mt-16 text-center">Contact Us</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded-lg shadow-md"
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
    </div>
  );
};

export default Contact;
