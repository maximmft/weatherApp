import './WeatherCard.css'
import Cloudy from '../assets/image/cloudy.jpg'
import Rainy from '../assets/image/rainy.jpg'
import Stormy from '../assets/image/storm.jpg'
import Sunny from '../assets/image/sunny.jpg'



function WeatherCard ({city, temperature, temperatureMax, temperatureMin, sky, humidity }){

return (
    <section className='weatherCard'>
        <h2>{city}</h2>
        <div className='temperatures'>
            <p id="temperature">{temperature}</p>
            <div id="temperatureMaxMin">
                <p>Max: {temperatureMax} </p>
                <p>Min: {temperatureMin}</p>
            </div>
        </div>
        {sky === "cloudy" && <img src={Cloudy}/> }
        {sky === "rainy" && <img src={Rainy}/> }
        {sky === "sunny" && <img src={Sunny}/> }
        {sky === "stormy" && <img src={Stormy}/>}
        <div id="humidityDiv"> 
            <p id="humidity">{humidity}</p>
            <p>Humidity </p>
        </div>
    </section>
)}

export default WeatherCard