import './weather_summary.css';
import { getFormattedDateFromTime } from '../utils/date';
import { getWeatherIcon } from '../utils/icons';
import { kelvinToCelsius } from '../utils/temperature';

function CurrentWeather(props) {

    return (
        <div className='CurrentWeather'>
            <div className='Info'>
                <h2>It's {getFormattedDateFromTime(props.currentConditions.time)}, the current weather in {props.cityName.charAt(0).toUpperCase() + props.cityName.slice(1)} is {props.currentConditions.summary.description}</h2>
            </div>
            <div className='WeatherConds'>
                <div>
                    <img id="main_icon" src={getWeatherIcon(props.currentConditions.summary.icon)} alt=":-("/>
                </div>
                <div className='Temperature'>
                    <h3>{kelvinToCelsius(props.currentConditions.temperature)}°C</h3>
                </div>
                <div className='Other'>
                    <ul>
                        <li>Humidity: {props.currentConditions.humidity}%</li>
                        <li>Wind Speed: {Math.round(props.currentConditions.windSpeed * 3.6)} Km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;