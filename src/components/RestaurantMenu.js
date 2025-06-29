import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) return <h2 className="text-center mt-10">Loading...</h2>;
  if (!restaurantData) return <h2 className="text-center mt-10 text-red-500">Failed to load restaurant details.</h2>;

  // Find restaurant info card safely
  const restaurantInfoCard = restaurantData?.cards?.find(
    (card) => card?.card?.card?.info
  );

  const restaurantInfo = restaurantInfoCard?.card?.card?.info;
  const menuCards = restaurantData?.cards?.find(
    (card) => card?.groupedCard
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {restaurantInfo && (
        <>
          <h1 className="text-2xl font-bold mb-2">{restaurantInfo.name}</h1>
          <p className="text-gray-600 mb-1">{restaurantInfo.cuisines?.join(", ")}</p>
          <p className="text-gray-500 mb-4">{restaurantInfo.costForTwoMessage}</p>
        </>
      )}

      <h2 className="text-xl font-semibold mb-3">Menu</h2>
      <ul className="space-y-2">
        {menuCards?.map((menuItem, index) => {
          const item = menuItem.card?.card?.itemCards?.[0]?.card?.info;
          return (
            item && (
              <li key={index} className="border-b pb-2">
                {item.name} - ₹{(item.price || item.defaultPrice) / 100}
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
