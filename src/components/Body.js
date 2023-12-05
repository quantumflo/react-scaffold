import restoData from '../utils/data/restaurant.json';
import RestoCard from './RestoCard';
const Body = () => {
    return (
      <div className='body'>
        <div className='search-container'>
          <input className='search-input' type='text' placeholder='Search Restaurants' />
          <button className='search-button'>Search</button>
        </div>
        <div className='restaurant-container'>
          {restoData.restaurants.map((restaurant, index) => {
            return (
              <RestoCard key={index} restaurant={restaurant} />
            )
          })
          }
        </div>
      </div>
    )
}

export default Body;