import { useEffect, useState } from "react";
import restoData from "../utils/data/restaurant.json";
import { CORSPROXY, SWIGGY_API } from "../utils/constants";
import RestoCard, { PromotedCardHOF } from "./RestoCard";
import SearchBar from "./SearchBar";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const PromotedCard = PromotedCardHOF(RestoCard);

  useEffect(() => {
    fetchSwiggyRestaurants();
  }, []);

  const fetchSwiggyRestaurants = async () => {
    let response = null;
    try {
      response = await fetch(`${CORSPROXY}${SWIGGY_API}`);
      if (!response.ok) {
        if (response.status !== 200) throw new Error("CORS API call failed");
      }
    } catch (e) {
      console.log(e);
      // use CORS browser extension to unblock CORS for below API call
      response = await fetch(`${SWIGGY_API}`);
    } finally {
      // finally not required 
      const jsonData = await response.json();
      const restaurants =
        jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;

      setRestaurants(restaurants);
      setfilteredRestaurants(restaurants);
    }
  };

  const topRatedRestosFilter = () => {
    const filteredRestos = restaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4.3
    );
    setRestaurants(filteredRestos);
  };

  const filteredRestos = (searchString) => {
    const filteredRestos = restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchString)
    );
    setfilteredRestaurants(filteredRestos);
  };

  const clearAllFilters = () => {
    setfilteredRestaurants(restaurants);
  };

  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return (
      <div className="offline">
        <h1>You are offline. Please check your internet connection</h1>
      </div>
    );
  }

  return (
    <div className="body">
      <SearchBar
        topRatedRestos={topRatedRestosFilter}
        filteredRestos={filteredRestos}
        clear={clearAllFilters}
      />
      {restaurants.length ? (
        <div className="restaurant-container">
          {/* Index as key is bad practise */}
          {filteredRestaurants.length ? (
            filteredRestaurants.map((restaurant, index) => {
              return restaurant?.info?.aggregatedDiscountInfoV3?.header ? (
                <PromotedCard key={index} restaurant={restaurant} />
              ) : (
                <RestoCard key={index} restaurant={restaurant} />
              );
            })
          ) : (
            <div style={{ fontWeight: "bolder" }}>No Restaurants Found</div>
          )}
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Body;
