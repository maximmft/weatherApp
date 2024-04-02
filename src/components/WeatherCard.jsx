import './WeatherCard.css'

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
        <p> {sky}</p>
        <div className="temperatureMaxMin">
        </div>
        <p> {humidity}</p>
    </section>
)}

export default WeatherCard