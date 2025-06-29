import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItemsToCart } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [restaurantData, setRestaurantData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState({});

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    try {
      const lat = "12.9351929";
      const lng = "77.62448069999999";
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`
      );
      const json = await response.json();
      setRestaurantData(json?.data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching restaurant menu:", err);
      setIsLoading(false);
    }
  };

  const handleCheckboxChange = (itemId, itemInfo) => {
    setSelectedItems((prev) => {
      const newSelection = { ...prev };
      if (newSelection[itemId]) {
        delete newSelection[itemId];
      } else {
        newSelection[itemId] = itemInfo;
      }
      return newSelection;
    });
  };

  const handleAddToCart = () => {
    const itemsArray = Object.values(selectedItems);
    dispatch(addItemsToCart(itemsArray));
    navigate("/home/cart");
  };

  const handleBuyNow = () => {
    console.log("Proceeding to buy:", Object.values(selectedItems));
    alert("Proceeding to buy...");
    // Optional: navigate to /checkout page with selected items
    // navigate("/checkout", { state: { items: Object.values(selectedItems) } });
  };

  if (isLoading) return <h2 className="text-center mt-10">Loading...</h2>;
  if (!restaurantData) return <h2 className="text-center mt-10 text-red-500">Failed to load restaurant details.</h2>;

  const restaurantInfoCard = restaurantData?.cards?.find(
    (card) => card?.card?.card?.info
  );

  const restaurantInfo = restaurantInfoCard?.card?.card?.info;
  const menuCards = restaurantData?.cards?.find(
    (card) => card?.groupedCard
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Back Button */}
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => navigate("/home")}
      >
        ← Back to Restaurants
      </button>

      {/* Restaurant Info */}
      {restaurantInfo && (
        <>
          <h1 className="text-2xl font-bold mb-2">{restaurantInfo.name}</h1>
          <p className="text-gray-600 mb-1">{restaurantInfo.cuisines?.join(", ")}</p>
          <p className="text-gray-500 mb-4">{restaurantInfo.costForTwoMessage}</p>
        </>
      )}

      {/* Menu Items */}
      <h2 className="text-xl font-semibold mb-3">Menu</h2>
      <ul className="space-y-2">
        {menuCards?.map((menuItem, index) => {
          const item = menuItem.card?.card?.itemCards?.[0]?.card?.info;
          if (!item) return null;
          return (
            <li key={index} className="flex items-center gap-3 border-b pb-2">
              <input
                type="checkbox"
                checked={!!selectedItems[item.id]}
                onChange={() => handleCheckboxChange(item.id, item)}
              />
              <label className="flex-1">
                {item.name} - ₹{(item.price || item.defaultPrice) / 100}
              </label>
            </li>
          );
        })}
      </ul>

      {/* Selected Items + Actions */}
      {Object.keys(selectedItems).length > 0 && (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Selected Items:</h3>
          <ul className="list-disc ml-5 mb-4">
            {Object.values(selectedItems).map((item) => (
              <li key={item.id}>
                {item.name} - ₹{(item.price || item.defaultPrice) / 100}
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
