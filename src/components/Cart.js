import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(UserContext);

  // ✅ Handle "Buy Now" redirect with cart data
  const handleBuyNow = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    navigate("/home/checkout", { state: { cartItems } }); // ✅ Send data to Checkout
  };

  const totalAmount = cartItems.reduce((total, item) => {
    const price = item.price || item.defaultPrice || 0;
    return total + price / 100;
  }, 0);

  if (!isLoggedIn) {
    return (
      <div className="text-center text-red-600 text-xl mt-20">
        User Logged Out Successfully
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => navigate("/home")}
      >
        ← Back to Restaurants
      </button>

      <h1 className="text-2xl font-bold mb-6 text-center">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{item.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-green-700 font-semibold">
                    ₹{(item.price || item.defaultPrice) / 100}
                  </p>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="text-red-500 text-sm hover:underline mt-1"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="text-right text-lg font-semibold mb-4 text-green-800">
            Total: ₹{totalAmount.toFixed(2)}
          </div>

          <div className="flex justify-end gap-4">
            <button
              onClick={handleBuyNow}
              className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
            >
              Buy Now
            </button>

            <button
              onClick={() => dispatch(clearCart())}
              className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
