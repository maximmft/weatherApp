import React from 'react';
import './App.css'
import WeatherCard from './components/WeatherCard'
import WeatherData from './data/data'
import SearchBar from './components/SearchBar';
import { useState } from 'react';

function App() {
  console.log(WeatherData)

  const [currentWeather, setCurrentWeather] = useState(null);

  const handleWeatherSearch = (weatherData) => {
    setCurrentWeather(weatherData);
  };

  return (
    <div className="App">
      <h1>Weather In</h1>
      <SearchBar onSearch={handleWeatherSearch} />
      {currentWeather && <WeatherCard
        city={currentWeather.city}
        temperature={currentWeather.temperature}
        temperatureMax={currentWeather.temperatureMax}
        temperatureMin={currentWeather.temperatureMin}
        sky={currentWeather.sky}
        humidity={currentWeather.humidity}
      />}
    </div>
  );
}

export default App

// key= {index} city = {weather.city} temperature = {temperature} temperatureMax = {weather.temperatureMax} temperatureMin = {weather.temperatureMin} sky = {weather.sky} humidity = {weather.humidity}