import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* ✅ Back Button */}
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => navigate("/home")}
      >
        ← Back to Restaurants
      </button>

      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-3 mb-6">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center border-b pb-2">
                <span>{item.name}</span>
                <span>₹{(item.price || item.defaultPrice) / 100}</span>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="text-red-500 hover:underline text-sm ml-4"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => dispatch(clearCart())}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
