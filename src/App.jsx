import React, {useState} from 'react';
import './App.css'
import WeatherCard from './components/WeatherCard'
import weatherData from './data/data'
import SearchBar from './components/SearchBar';


function App() {
    const [searchCity, setSearchCity] = useState('');
    const [tabFilterData, setTabFilterData] = useState(weatherData);
  
    const handleSearch = (event) => {
      event.preventDefault();
      setSearchCity(event.target.value) //met à jour searchcity avec la valeur saisie
      //lowercase (minuscule)
      //includes js
      const filter = weatherData.filter(weather => weather.city.toLowerCase() === event.target.value.toLowerCase())
      //crée un nouveau tableau en filtrant weatherdata en ne conservant que les éléments 
      //dont la ville(weather.city) correspond à la valeur saisie(target.value)
      if (filter.length !== 0){
        setTabFilterData(filter)
      } else { 
        setTabFilterData(weatherData)
      }
  };

  return (
    <>
     <h1>Weather In</h1>
     <SearchBar searchCity={searchCity} handleSearch={handleSearch}/>
      {tabFilterData.map((weather, index) => {
        return (
          <div key={index}>
            <WeatherCard
            city={weather.city}
            temperature={weather.temperature}
            temperatureMax={weather.temperatureMax}
            temperatureMin={weather.temperatureMin}
            sky={weather.sky}
            humidity={weather.humidity}
            />
        </div>
        )
      })}
        
    </>
  )
}

export default App

// key= {index} city = {weather.city} temperature = {temperature} temperatureMax = {weather.temperatureMax} temperatureMin = {weather.temperatureMin} sky = {weather.sky} humidity = {weather.humidity}