import restoData from "../utils/data/restaurant.json";
import RestoCard from "./RestoCard";
import SearchBar from "./SearchBar";
const Body = () => {
  return (
    <div className="body">
      <SearchBar />
      <div className="restaurant-container">
        {restoData.restaurants.map((restaurant, index) => {
          return <RestoCard key={index} restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
