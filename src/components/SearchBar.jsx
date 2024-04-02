
function SearchBar({searchCity, handleSearch}) {

  return (
    <div className="searchBar">
        <input
        type="text"
        onChange={handleSearch}
        value={searchCity}
        placeholder="Enter city name"
        />  
`        
        {/* <button type="submit">Search</button> */}
    </div>
  );
}

export default SearchBar;
