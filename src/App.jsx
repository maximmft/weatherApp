import React from 'react';
import './App.css'
import WeatherCard from './components/WeatherCard'
import WeatherData from './data/data'

function App() {
  console.log(WeatherData)

  const weatherData = WeatherData[2]

  return (
    <>
     <h1>Weather In</h1>
     <div>
        <WeatherCard
          city={weatherData.city}
          temperature={weatherData.temperature}
          temperatureMax={weatherData.temperatureMax}
          temperatureMin={weatherData.temperatureMin}
          sky={weatherData.sky}
          humidity={weatherData.humidity}
        />
     </div>
    </>
  )
}

export default App

// key= {index} city = {weather.city} temperature = {temperature} temperatureMax = {weather.temperatureMax} temperatureMin = {weather.temperatureMin} sky = {weather.sky} humidity = {weather.humidity}