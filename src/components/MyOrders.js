import { useSelector } from "react-redux";

const MyOrders = () => {
  const orderHistory = useSelector((store) => store.orders.orderHistory);

  return (
    <div className="p-6">
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
