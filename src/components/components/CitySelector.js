import { useState, useEffect } from 'react';
import './city_selection.css';
import sun from './sunny.png'

function CitySel(props) {
    const [cities, setCities] = useState([]);

    const handleCityClick = (cityName) => {
        props.onCityClick(cityName)
    };

    useEffect(() => {
        fetch('https://mscbt-luis-grande.herokuapp.com/group-assignment/cities')
            .then(response => response.json())
            .then(response => setCities(response));
    }, []);


    return(
       <div class = "flex--basic"> 
            <div className = 'photo'> 
            <img src = {sun} className= "pic1" alt = "sun"/> </div>
            <div className='CitySelector'>
                {cities.map(city => {
                    return(
                        <button className='citybutton' type='button' onClick = {() => handleCityClick(city)}>
                            <h3>{city}</h3>
                        </button>
                        );
                    })
                }
            </div>
        </div>
        
    )
}

export default CitySel;