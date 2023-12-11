import { useEffect, useState } from "react";
import restoData from "../utils/data/restaurant.json";
import { CORSPROXY, SWIGGY_API } from "../utils/constants";
import RestoCard from "./RestoCard";
import SearchBar from "./SearchBar";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";


const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);



  useEffect(() => {
    fetchSwiggyRestaurants();
  }, []);

  const fetchSwiggyRestaurants = async () => {
    const data = await fetch(
      `${CORSPROXY}${SWIGGY_API}`
    );
    const jsonData = await data.json();
    const restaurants =
      jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;

    setRestaurants(restaurants);
    setfilteredRestaurants(restaurants);
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
  }
  
  const clearAllFilters = () => {
    setfilteredRestaurants(restaurants);
  };

  const isOnline = useOnlineStatus();

  if( !isOnline ) {
    return <div className="offline"><h1>You are offline. Please check your internet connection</h1></div>
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
          {filteredRestaurants.length? filteredRestaurants.map((restaurant, index) => {
            return <RestoCard key={index} restaurant={restaurant} />;
          }): <div style={{fontWeight:"bolder"}}>No Restaurants Found</div>}
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Body;
