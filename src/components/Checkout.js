import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  const totalAmount = cartItems.reduce((total, item) => {
    const price = item.price || item.defaultPrice || 0;
    return total + price / 100;
  }, 0);

  const handlePlaceOrder = () => {
  alert("✅ Order placed successfully!");
  navigate("/home/order", { state: { cartItems } });
};


  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => navigate("/home/cart")}
      >
        ← Back to Cart
      </button>

      <h1 className="text-2xl font-bold mb-6 text-center">🧾 Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-medium text-gray-800">{item.name}</p>
                </div>
                <p className="text-green-700 font-semibold">
                  ₹{(item.price || item.defaultPrice) / 100}
                </p>
              </li>
            ))}
          </ul>

          <div className="text-right text-lg font-semibold mb-6 text-green-800">
            Total: ₹{totalAmount.toFixed(2)}
          </div>

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
  );
};

export default Checkout;
