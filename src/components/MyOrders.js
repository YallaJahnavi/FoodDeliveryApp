import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const navigate = useNavigate();
  const orderHistory = useSelector((store) => store.orders.orderHistory);

  const handleBackToHome = () => {
    navigate("/home");
  };

  return (
    <div className="p-6">
      {/* ✅ Back to Home Button */}
      <div className="mb-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleBackToHome}
        >
          ← Back to Home
        </button>
      </div>

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
                    {item.name} — ₹{(item.price || item.defaultPrice || 0) / 100} ×{" "}
                    {item.quantity || 1}
                  </li>
                ))}
              </ul>

              <p className="text-right font-semibold text-green-700">
                Total: ₹{order.total}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
