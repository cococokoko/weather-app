import { useState} from 'react';

import './App_weather.css';
import CitySel from './components/CitySelector'
import WeatherSummary from './components/WeatherSummary'
import logo from './images/logo.png'

function App() {
    const [selectedCity, setSelectedCity] = useState('');

    const handleOnCityButtonClick = (cityName) => {
        setSelectedCity(cityName);
    };
    console.log('Here');

    return (
        <div className='App'>

            <div className='App_container'>
                <div> 
                <img className= "pic" src = {logo} alt = "Welcome to Group 3's Weather App!"/> </div>

                <div className='LandingIntro'>
                    <CitySel onCityClick={handleOnCityButtonClick}/>
                </div>
                <WeatherSummary cityName={selectedCity}/>

            </div>
            <div className='footer'>A Group 3 Production</div>
        </div>
    )

}

export default App;
