import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cancelOrder } from "../utils/ordersSlice";
import UserContext from "../utils/UserContext";
import "./MyOrders.css"; // ✅ Import the CSS for background styling

const MyOrders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderHistory = useSelector((store) => store.orders.orderHistory);
  const { isLoggedIn } = useContext(UserContext);

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

  const handleTrackOrder = (orderId) => {
    navigate(`/home/track/${orderId}`);
  };

  // ✅ Show logout message + login button if not logged in
  if (!isLoggedIn) {
    return (
      <div className="text-center mt-20">
        <p className="text-red-600 font-semibold text-xl mb-4">
          User Logged Out Successfully
        </p>
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login Again
        </button>
      </div>
    );
  }

  return (
    <div className="myorders-wrapper">
      <div className="myorders-content">
        {/* ✅ Back to Home Button */}
        <div className="mb-4">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleBackToHome}
          >
            ← Back to Home
          </button>
        </div>

        <h1 className="text-3xl font-bold mb-6 text-center">My Orders</h1>

        {orderHistory.length === 0 ? (
          <p className="text-gray-600">You have no past orders yet.</p>
        ) : (
          <div className="space-y-6">
            {orderHistory.map((order) => (
              <div
                key={order.id}
                className="border border-gray-300 p-4 rounded-lg shadow-md bg-white"
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

                {/* ✅ Buttons in flex row */}
                <div className="flex justify-between mt-3">
                  <button
                    className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleCancel(order.id)}
                  >
                    Cancel Order
                  </button>

                  <button
                    className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => handleTrackOrder(order.id)}
                  >
                    Track Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
