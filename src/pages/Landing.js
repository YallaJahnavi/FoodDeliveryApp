// Landing.js
import { useNavigate } from "react-router-dom";
//import logo from "../assets/logo.jpg"; // Your local logo

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2lzMTYwNjItaW1hZ2Uta3d2eWZrd3IuanBn.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-90 shadow-xl rounded-lg p-10 w-full max-w-md text-center border border-gray-300">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
  src="https://t3.ftcdn.net/jpg/02/02/07/56/360_F_202075610_MGQKkqilBtXnLwMtWlSDvFrrW2kbYYgl.jpg"
  alt="TMF Logo"
  className="h-36 w-36 rounded-full object-cover border-4 border-black-500 shadow-lg transition-transform duration-300 hover:scale-105"
/>

        </div>

        {/* Title & Tagline */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2 tracking-wide">
          Welcome to TMF
        </h1>
        <p className="text-lg text-gray-600 font-medium mb-6">
          # TASTY MEALS FEAST #
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded shadow-md transition duration-300"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded shadow-md transition duration-300"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
