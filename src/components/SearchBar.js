const SearchBar = ({topRatedRestos, clear }) => {
  return (
    <div className="toolbar">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search Restaurants"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="filter-container">
        <button className="filter-button" onClick={()=>{topRatedRestos()} }>Top Rated</button>
        <button className="filter-button" style={{backgroundColor: 'bisque'}} onClick={()=>{clear()} }>Clear</button>
      </div>
    </div>
  );
};

export default SearchBar;
