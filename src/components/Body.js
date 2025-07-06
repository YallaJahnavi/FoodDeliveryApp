import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);
  const { loggedInUser, setUserName, isLoggedIn } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  const navigate = useNavigate(); // Required for button navigation

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const cards = json?.data?.cards || [];
    let restaurants = [];

    for (const card of cards) {
      if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
        restaurants = card.card.card.gridElements.infoWithStyle.restaurants;
        break;
      }
    }

    setListOfRestraunt(restaurants || []);
    setFilteredRestaurant(restaurants || []);
  };

  if (onlineStatus === false) {
    return (
      <h1 className="text-center text-xl mt-10 text-red-600">
        Looks like you're offline!! Please check your internet connection.
      </h1>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold text-red-600">
          User Logged Out Successfully !!!
        </h2>
        <button
          onClick={() => navigate("/login")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login Again
        </button>
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div
      className="min-h-screen bg-cover bg-center px-4 py-6"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/030/637/464/non_2x/dark-fast-food-8k-free-photo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Filter/Search Section */}
      <div className="filter flex flex-wrap gap-4 mb-6 items-center justify-center">
        <div className="search flex items-center gap-2">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black p-2 rounded"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Restaurants"
          />
          <button
            className="px-4 py-2 bg-green-100 rounded-lg"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Restaurant Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurant.length === 0 ? (
          <p className="text-center w-full col-span-full text-red-500">
            No restaurants match your search.
          </p>
        ) : (
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info.id}
              to={`/home/restaurants/${restaurant?.info.id}`} // route
            >
              {restaurant?.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant?.info} />
              ) : (
                <RestaurantCard resData={restaurant?.info} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
