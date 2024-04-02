import './WeatherCard.css'

function WeatherCard ({city, temperature, temperatureMax, temperatureMin, sky, humidity }){

return (
    <section className='weatherCard'>
        <h2>{city}</h2>
        <p id="temperature">{temperature}</p>
        <p> {sky}</p>
        <div className="temperatureMaxMin">
            <p>{temperatureMax} {temperatureMin}</p>
        </div>
        <p> {sky}</p>
        <p> {humidity}</p>
    </section>
)}

export default WeatherCard