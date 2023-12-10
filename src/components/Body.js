import { useEffect, useState } from "react";
import restoData from "../utils/data/restaurant.json";
import RestoCard from "./RestoCard";
import SearchBar from "./SearchBar";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchSwiggyRestaurants();
  }, []);

  const fetchSwiggyRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5642382&lng=73.77694319999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const restaurants =
      jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;

    setRestaurants(restaurants);
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
    setRestaurants(filteredRestos);
  }
  
  const clearAllFilters = () => {
    fetchSwiggyRestaurants();
  };

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
          {restaurants?.map((restaurant, index) => {
            return <RestoCard key={index} restaurant={restaurant} />;
          })}
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Body;
