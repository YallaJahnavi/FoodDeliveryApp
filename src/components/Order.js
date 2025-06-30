import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartItems || [];

  const grandTotal = cartItems.reduce((total, item) => {
    const price = (item.price || item.defaultPrice || 0) / 100;
    return total + price * (item.quantity || 1);
  }, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Back to Home Button */}
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => navigate("/home")}
      >
        ← Back to Home
      </button>

      {/* Order Confirmation Heading */}
      <h1 className="text-2xl font-bold text-center mb-6">🎉 Order Confirmed!</h1>

      {/* Brand Title */}
      <h2 className="text-3xl font-extrabold text-center mb-8 text-orange-600 drop-shadow-lg tracking-wide uppercase">
        TMF <span className="text-gray-800">[Tasty Meals Feast]</span>
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">No items found in the order.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Item Name</th>
                <th className="border p-2 text-center">Quantity</th>
                <th className="border p-2 text-right">Price (₹)</th>
                <th className="border p-2 text-right">Total (₹)</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => {
                const quantity = item.quantity || 1;
                const price = (item.price || item.defaultPrice || 0) / 100;
                const total = price * quantity;

                return (
                  <tr key={index}>
                    <td className="border p-2">{item.name}</td>
                    <td className="border p-2 text-center">{quantity}</td>
                    <td className="border p-2 text-right">{price.toFixed(2)}</td>
                    <td className="border p-2 text-right">{total.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="text-right text-lg font-bold text-green-800 mt-6">
            Grand Total: ₹{grandTotal.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
