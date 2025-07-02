// components/Profile.js
import React, { useEffect, useState } from "react";
import { getUser } from "../utils/localStorageUtils"; // ✅ Import function

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = getUser();
    if (storedUser) {
      // Remove password before setting
      const { password, ...userWithoutPassword } = storedUser;
      setUser(userWithoutPassword);
    }
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
        No user data found. Please register or login.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100">
      <div className="bg-white p-10 rounded shadow-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">👤 User Profile</h1>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            <strong>Username:</strong> {user.username}
          </li>
          <li>
            <strong>Email:</strong> {user.email}
          </li>
          <li>
            <strong>Date of Birth:</strong> {user.dob}
          </li>
          <li>
            <strong>Phone:</strong> {user.phone}
          </li>
          <li>
            <strong>Address:</strong> {user.address}
          </li>
          <li>
            <strong>Gender:</strong> {user.gender}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
