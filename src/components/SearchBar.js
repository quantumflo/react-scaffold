import { useState } from "react";


const SearchBar = ({topRatedRestos, filteredRestos, clear }) => {
  const [searchString, setSearchString] = useState("");
  return (
    <div className="toolbar">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search Restaurants"
          value={searchString}
          onChange={((e)=> setSearchString(e.target.value.toLowerCase()))}
        />
        <button onClick={()=> filteredRestos(searchString) } className="search-button">Search</button>
      </div>
      <div className="filter-container">
        <button className="filter-button" onClick={()=>{topRatedRestos()} }>Top Rated</button>
        <button className="filter-button" style={{backgroundColor: 'bisque'}} onClick={()=>{clear()} }>Clear</button>
      </div>
    </div>
  );
};

export default SearchBar;
