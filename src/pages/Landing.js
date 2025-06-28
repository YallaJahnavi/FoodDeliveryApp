// Landing.js
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center border-2 border-black">
      <h1 className="text-xl mb-10">WELCOME TO FOOD DELIVERY APPLICATION</h1>
      <div className="flex gap-10">
        <button
          className="border-2 border-black px-6 py-2"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
        <button
          className="border-2 border-black px-6 py-2"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Landing;