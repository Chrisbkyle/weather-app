import React from "react";
import { toUpper, windDir } from './Utils';


export default function CurrentDay(props) {

    // console.log(props.data)

    
    let today = new Date()
    let formatOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div>
            <h1>1</h1>
            <div className='currentContainer'>
                <div className='currentWeather flex-col'>
                    <h3 className='currentTitle'>Current Weather</h3>
                    <figure>
                        <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`} alt='icon of the current weather'/>
                        <figcaption>{toUpper(props.data.weather[0].description)}</figcaption>
                    </figure>
                    <ul className='currentTempHum'>
                        <li>Temperature {props.data.temp} {'\u2103'}</li>
                        <li>Humidity {props.data.humidity} %</li>
                        <li>Feels Like {props.data.feelsLike} {'\u2103'}</li>
                    </ul>
                </div>
                <div className='currentTimeTemp flex-row'>
                    <div className='currentTime'>{today.toLocaleDateString('en-US', formatOptions)}</div>
                </div>
                <div className='currentWind flex-row'>
                    <div>Wind Speed {props.data.windSpeed} kph</div>
                    <div>Direction {windDir(props.data.windDirection)}</div>    
                </div>
            </div>
        </div>
    )
}