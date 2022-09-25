import { getHourFromTime, getHoursUntilEndOfDay} from '../utils/date';
import { getWeatherIcon } from '../utils/icons';
import { kelvinToCelsius } from '../utils/temperature';
import { createNumericSequenceArray } from '../utils/array';

import './weather_summary.css';

function HourlyForecasts(props) {
    const remainingHours = getHoursUntilEndOfDay()
    return (
        <div className='HourlyAll'>
            <h2>Weather for the next {remainingHours} hours</h2>
            <div className='HourlyForecasts'>
                {createNumericSequenceArray(remainingHours).map((_valuesofSeqArray, index) => {
                    const HourInfo = props.allHourly[index];
                    return(
                        <div className='HourFcast'>
                            <h3>{getHourFromTime(HourInfo.time)}h</h3>
                            <img src={getWeatherIcon(HourInfo.summary.icon)} alt=":-("/>
                            <ul>
                                <li>{kelvinToCelsius(HourInfo.temperature)}°C</li>
                            </ul>
                        </div>
                    );
                    })
                }
            </div>
        </div>
    )
}

export default HourlyForecasts;