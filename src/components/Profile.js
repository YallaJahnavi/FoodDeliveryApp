// components/Profile.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100 relative p-4">
      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/home")}
        className="absolute top-4 left-4 bg-gray-200 px-4 py-2 rounded shadow hover:bg-gray-300 text-sm"
      >
        ← Back to Home
      </button>

      <div className="flex items-center justify-center mt-10">
        <div className="bg-white p-10 rounded shadow-lg text-center max-w-lg w-full">
          <h1 className="text-3xl font-bold text-green-700 mb-4">👤 User Profile</h1>

          {user ? (
            <div className="text-left text-lg space-y-2">
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Date of Birth:</strong> {user.dob}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Address:</strong> {user.address}</p>
              <p><strong>Gender:</strong> {user.gender}</p>
            </div>
          ) : (
            <p className="text-red-600 font-semibold">No user details found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
