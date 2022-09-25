import { useState, useEffect } from 'react';
import './weather_summary.css';
import './city_selection.css';
import '../App_weather.css';
import CurrentWeather from './currentWeather';
import DailyForecasts from './dailyForecast';
import HourlyForecasts from './hourlyForecast';

function WeatherSummary(props) {
    const [WeatherConditions, setConditions] = useState(null);

    useEffect(() => {
        if (props.cityName){
            fetch('https://mscbt-luis-grande.herokuapp.com/group-assignment/weather/' + props.cityName)
            .then(response => response.json())
            .then(response => setConditions(response));
        } else {
            setConditions(null);
        }

    }, [props.cityName]);

    if (WeatherConditions) {
        return(
            <div className="All-the-Weather">
                <CurrentWeather currentConditions={WeatherConditions.current} cityName={props.cityName}/>
                <div className="All-Forecasts">
                    <HourlyForecasts allHourly={WeatherConditions.hourly}/>
                    <DailyForecasts allDailies={WeatherConditions.daily}/>
                </div>
            </div>
        );
    } 
    return (
        <div><h3>Select a city!</h3></div>
    );

}

export default WeatherSummary;