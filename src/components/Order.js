import React from "react";
import { useLocation } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  const totalAmount = cartItems.reduce((total, item) => {
    const price = item.price || item.defaultPrice || 0;
    return total + price / 100;
  }, 0);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">🎉 Order Confirmed!</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">No items found in the order.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <p className="font-medium text-gray-800">{item.name}</p>
                <p className="text-green-700 font-semibold">
                  ₹{(item.price || item.defaultPrice) / 100}
                </p>
              </li>
            ))}
          </ul>

          <div className="text-right text-lg font-semibold text-green-800">
            Total Paid: ₹{totalAmount.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Order;
