import { getFormattedDateFromTime, getDayOfTheWeek} from '../utils/date';
import { getWeatherIcon } from '../utils/icons';
import { kelvinToCelsius } from '../utils/temperature';
import { createNumericSequenceArray } from '../utils/array';

import './weather_summary.css';

function DailyForecasts(props) {
    const total_days = 5;
    return (
        <div className='DailyAll'>
            <h2>Weather for the next {total_days} days</h2>
            <div className='DailyForecasts4x4'>
                {createNumericSequenceArray(total_days).map((_valuesofSeqArray, index) => {
                    const dayInfo = props.allDailies[index + 1];
                    return(
                        <div className='DayFcast'>
                            <h3>{getDayOfTheWeek(dayInfo.time)}, {getFormattedDateFromTime(dayInfo.time)}</h3>
                            <img src={getWeatherIcon(dayInfo.summary.icon)} alt=":-("/>
                            <ul>
                                <li>Max: {kelvinToCelsius(dayInfo.temperature.max)}°C</li>
                                <li>Min: {kelvinToCelsius(dayInfo.temperature.min)}°C</li>
                            </ul>
                        </div>
                    );
                    })
                }
            </div>
        </div>
    )
}

export default DailyForecasts;