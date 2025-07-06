import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { addOrder } from "../utils/ordersSlice"; //  NEW
import "./Order.css"; //  NEW

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = location.state?.cartItems || [];

  const grandTotal = cartItems.reduce((total, item) => {
    const price = (item.price || item.defaultPrice || 0) / 100;
    return total + price * (item.quantity || 1);
  }, 0);

  //  Store order to Redux only once on mount
  useEffect(() => {
    if (cartItems.length > 0) {
      dispatch(
        addOrder({
          id: Date.now(),
          date: new Date().toLocaleString(),
          items: cartItems,
          total: grandTotal.toFixed(2),
        })
      );
    }
  }, [cartItems, dispatch, grandTotal]);

  const handleBackToHome = () => {
    dispatch(clearCart());
    navigate("/home");
  };

  return (
    <div className="order-wrapper">
      <div className="order-content">

        <h1 className="text-2xl font-bold text-center mb-6">🎉 Order Confirmed!</h1>

        <h2 className="text-3xl font-extrabold text-center mb-8 text-orange-600 drop-shadow-lg tracking-wide uppercase">
          TMF <span className="text-gray-800">[Tasty Meals Feast]</span>
        </h2>

        <p className="food-time-text"> # MADE WITH LOVE ❤️, DELIVERED WITH SPEED 🚚</p>

        <br></br>
        <br></br>

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

            <p className="text-right mt-6"> Thank you for Ordering food !!! </p>

            {/*  Moved button here and aligned to bottom right */}
            <div className="text-right mt-6">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleBackToHome}
              >
                ← Back to Home
              </button>

              <button
  onClick={() => navigate("/home/track")}
  className="mt-6 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
>
  🚚 Track Your Order
</button>


            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
