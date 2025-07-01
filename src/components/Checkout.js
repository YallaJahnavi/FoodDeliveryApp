// Checkout.js
import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const cartItems = location.state?.cartItems || [];
  const restaurantName = location.state?.restaurantName || "Unknown";
  const isBuyNow = location.state?.isBuyNow || false;

  const totalAmount = cartItems.reduce((total, item) => {
    const price = item.price || item.defaultPrice || 0;
    const quantity = item.quantity || 1;
    return total + (price / 100) * quantity;
  }, 0);

  const handlePlaceOrder = () => {
    alert("✅ Order placed successfully!");
    navigate("/home/order", {
      state: {
        cartItems,
        restaurantName,
        isBuyNow,
      },
    });
  };

  return (
    <div className="checkout-wrapper">
      <div className="checkout-content">
        <button
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => navigate("/home/cart")}
        >
          ← Back to Cart
        </button>

        <h1 className="text-2xl font-bold mb-6 text-center">🧾 Checkout</h1>


        <h2 className="text-center text-lg mb-4 text-gray-700">
          Restaurant: {restaurantName}
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4 mb-6">
              {cartItems.map((item, index) => {
                const quantity = item.quantity || 1;
                const price = (item.price || item.defaultPrice || 0) / 100;
                const itemTotal = price * quantity;

                return (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">Qty: {quantity}</p>
                    </div>
                    <p className="text-green-700 font-semibold">
                      ₹{itemTotal.toFixed(2)}
                    </p>
                  </li>
                );
              })}
            </ul>

            <div className="text-right text-lg font-semibold mb-6 text-green-800">
              Total: ₹{totalAmount.toFixed(2)}
            </div>
              
              <p className="food-time-text"> # What's cooking in that brain 🧠, PLACE ORDER</p>

            <br>
            </br>

            <div className="text-center">
              <button
                onClick={handlePlaceOrder}
                className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
