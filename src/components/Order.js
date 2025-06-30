import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get cart items if passed from Checkout (optional)
  const cartItems = location.state?.cartItems || [];

  // Optional: Redirect to home after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="p-6 text-center max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        🎉 Thank you for your order!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Your delicious food is being prepared and will be delivered soon.
      </p>

      {cartItems.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Ordered Items:</h2>
          <ul className="text-left space-y-1">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between border-b pb-1">
                <span>{item.name}</span>
                <span className="text-green-600 font-medium">
                  ₹{(item.price || item.defaultPrice) / 100}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="text-sm text-gray-500">Redirecting to home page in a few seconds...</p>
    </div>
  );
};

export default Order;
