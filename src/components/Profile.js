// components/Profile.js
import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100">
      <div className="bg-white p-10 rounded shadow-lg text-center max-w-lg w-full">
        <h1 className="text-3xl font-bold text-green-700 mb-4">👤 User Profile</h1>
        <p className="text-gray-700 text-lg">Welcome to your profile page.</p>
        {/* Add user details here */}
      </div>
    </div>
  );
};

export default Profile;

