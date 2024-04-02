import React, { useState } from 'react';
import WeatherData from '../data/data';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    const foundWeather = WeatherData.find(weather => weather.city.toLowerCase() === city.toLowerCase());
    if (foundWeather) {
      onSearch(foundWeather);
    } else {
      alert('City not found!');
    }
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
