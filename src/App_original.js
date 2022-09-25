import { createNumericSequenceArray } from './utils/array';
import { getDayFromTime, getDayOfTheWeek, getFormattedDateFromTime, getHourFromTime, getHoursUntilEndOfDay, getMonthFromTime, getYearFromTime } from './utils/date';
import { getWeatherIcon } from './utils/icons';
import { kelvinToCelsius } from './utils/temperature';

import './App.css';

function App() {

    return (
        <div className="App">
            <div className="App__container instructions">
                <h1>Utilities in the repo</h1>
                There are some utilities that you can use to manipulate arrays, dates, icons and temperatures.
                To import them and using them, you have an example at the bottom of this file.
                <h4>Arrays</h4>
                <p>
                    <strong>createNumericSequenceArray</strong>: Creates an array with a numeric sequence from 0 until the number (not included) you pass as argument to the function.
                    <pre>
                        createNumericSequenceArray(5): {JSON.stringify(createNumericSequenceArray(5))}
                    </pre>
                </p>
                <h4>Dates</h4>
                <p>
                    <strong>getHourFromTime</strong>: Returns the hour of the timestamp (in the weather response corresponds to the time field) passed an argument to the function. Date.now() in the example returns the current timestamp
                    <pre>
                        getHourFromTime(Date.now()): {getHourFromTime(Date.now())}
                    </pre>
                </p>
                <p>
                    <strong>getHoursUntilEndOfDay</strong>: Returns the number of hours until the end of the day of the timestamp (in the weather response corresponds to the time field) passed an argument to the function.
                    <pre>
                        getHoursUntilEndOfDay(): {getHoursUntilEndOfDay()}
                    </pre>
                </p>
                <p>
                    <strong>getDayFromTime</strong>: Returns the day of the month of the timestamp (in the weather response corresponds to the time field) passed an argument to the function.  Date.now() in the example returns the current timestamp
                    <pre>
                        getDayFromTime(Date.now()): {getDayFromTime(Date.now())}
                    </pre>
                </p>
                <p>
                    <strong>getMonthFromTime</strong>: Returns the month of the year of the timestamp (in the weather response corresponds to the time field) passed an argument to the function.  Date.now() in the example returns the current timestamp
                    <pre>
                        getMonthFromTime(Date.now()): {getMonthFromTime(Date.now())}
                    </pre>
                </p>
                <p>
                    <strong>getYearFromTime</strong>: Returns the year of the timestamp (in the weather response corresponds to the time field) passed an argument to the function.  Date.now() in the example returns the current timestamp
                    <pre>
                        getYearFromTime(Date.now()): {getYearFromTime(Date.now())}
                    </pre>
                </p>
                <p>
                    <strong>getDayOfTheWeek</strong>: Returns the name of the day of the week of the timestamp (in the weather response corresponds to the time field) passed an argument to the function.  Date.now() in the example returns the current timestamp
                    <pre>
                        getDayOfTheWeek(Date.now()): {getDayOfTheWeek(Date.now())}
                    </pre>
                </p>
                <p>
                    <strong>getFormattedDateFromTime</strong>: Returns the the day and the month (February 22 for example) of the timestamp (in the weather response corresponds to the time field) passed an argument to the function.  Date.now() in the example returns the current timestamp
                    <pre>
                        getFormattedDateFromTime(Date.now()): {getFormattedDateFromTime(Date.now())}
                    </pre>
                </p>
                <h4>Icons</h4>
                <p>
                    <strong>getWeatherIcon</strong>: Returns the url of a weather icon based on the icon (key icon in summary field) you pass as argument to the function
                    <pre>
                        getWeatherIcon(04d): {getWeatherIcon('04d')}
                    </pre>
                </p>
                <h4>Temperatures</h4>
                <p>
                    <strong>kelvinToCelsius</strong>: Transforms a temperature from Kelvin degrees to Celsius degrees
                    <pre>
                        kelvinToCelsius(273): {kelvinToCelsius(273)}
                    </pre>
                </p>
                <p>
                    You can find an example of how a possible solution looks here: <a target="_blank" href="https://weather-app-luisgrandegg.netlify.app/">Example</a>
                </p>
                <p>
                    <strong>Happy Coding!</strong>
                </p>
            </div>
        </div>
    );
}

export default App;
