

import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cancelOrder } from "../utils/ordersSlice";
import UserContext from "../utils/UserContext";


const MyOrders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderHistory = useSelector((store) => store.orders.orderHistory);
  const { isLoggedIn } = useContext(UserContext); // ✅ access login state

  const handleBackToHome = () => {
    navigate("/home");
  };

  const handleCancel = (orderId) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this order?");
    if (confirmCancel) {
      dispatch(cancelOrder(orderId));
      alert("Order Cancelled Successfully");
    }
  };

 return (
  <div className="p-6">
    <div className="mb-4">
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleBackToHome}
      >
        ← Back to Home
      </button>
    </div>

    {!isLoggedIn ? (
  <>
    <div className="flex items-center justify-center h-[60vh]">
      <p className="text-red-600 font-semibold text-xl text-center">
        User Logged Out Successfully
      </p>
    </div>
  </>
) : (
  <>
    <h1 className="text-3xl font-bold mb-6">My Orders</h1>

    {orderHistory.length === 0 ? (
      <p className="text-gray-600">You have no past orders yet.</p>
    ) : (
      <div className="space-y-6">
        {orderHistory.map((order) => (
          <div
            key={order.id}
            className="border border-gray-300 p-4 rounded-lg shadow-md"
          >
            <p className="text-sm text-gray-500">Ordered on: {order.date}</p>

            <ul className="list-disc list-inside mt-2 mb-2">
              {order.items.map((item, idx) => (
                <li key={idx}>
                  {item.name} — ₹
                  {(item.price || item.defaultPrice || 0) / 100} ×{" "}
                  {item.quantity || 1}
                </li>
              ))}
            </ul>

            <p className="text-right font-semibold text-green-700">
              Total: ₹{order.total}
            </p>

            <button
              className="mt-2 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => handleCancel(order.id)}
            >
              Cancel Order
            </button>
          </div>
        ))}
      </div>
    )}
  </>
)}

  </div>
);

};

export default MyOrders;
