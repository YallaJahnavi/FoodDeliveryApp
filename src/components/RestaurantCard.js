import { useContext } from "react";
import UserContext from "../utils/UserContext";

// Static image map based on restaurant name
const restaurantImages = {
  "Burger King": "/images/burger-king.jpeg",
  "Pizza Hut": "/images/pizza-hut.jpeg",
  //"EatFit": "/images/eatfit.jpg",
  //"NIC Ice Creams": "/images/nic-ice-creams.jpg",
  // Add more mappings as needed
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId = "",
    name = "Unknown Restaurant",
    avgRating = "4.0",
    cuisines = [],
    costForTwo = 20000,
    sla = {},
  } = resData || {};

  // Static image from map if available; otherwise fallback to dynamic Cloudinary or placeholder
  const imageUrl =
    restaurantImages[name] ||
    (cloudinaryImageId
      ? `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`
      : "https://via.placeholder.com/300x200?text=No+Image");

  return (
    <div
      data-testid="resCard"
      className="w-64 h-80 m-4 p-4 bg-gray-100 hover:bg-gray-200 rounded-lg flex flex-col justify-between shadow-md transition-transform hover:scale-105"
    >
      <img
        className="w-full h-32 object-cover rounded-md mb-2 aspect-video"
        alt="res-logo"
        src={imageUrl}
      />

      <div className="flex flex-col justify-between flex-1">
        <h3 className="font-bold text-md truncate">{name}</h3>
        <p className="text-sm text-gray-700 line-clamp-2">
          {cuisines.length > 0 ? cuisines.join(", ") : "Various Cuisines"}
        </p>
        <div className="mt-2 text-sm">
          <p>
            ⭐ {avgRating} • ₹
            {isNaN(costForTwo / 100)
              ? "200"
              : (costForTwo / 100).toFixed(0)}{" "}
            FOR TWO
          </p>
          <p>{sla?.deliveryTime || 30} mins</p>
          <p className="text-gray-500 text-xs">User: {loggedInUser}</p>
        </div>
      </div>
    </div>
  );
};

// Higher Order Component to add 'Promoted' label
export const withPromtedLabel = (RestaurantCard) => {
  return (props) => (
    <div className="relative">
      <label className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
        Promoted
      </label>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;
