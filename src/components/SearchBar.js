const SearchBar = () => {
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
        <button className="filter-button" onClick={()=>{} }>Top Rated</button>
      </div>
    </div>
  );
};

export default SearchBar;
