import React from 'react';
import '../App.css';
import { toUpper, windDir } from './Utils';




export default function Current(props){

    let today = new Date()
    let formatOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


    return(
        <>
            <div class='currentContainer'>
                <div class='currentWeather flex-col'>
                    <h3 className='currentTitle'>Current Weather</h3>
                    <figure>
                        <img src={`https://openweathermap.org/img/wn/${props.weatherIcon}.png`} alt='icon of the current weather'/>
                        <figcaption>{toUpper(props.weatherDescription)}</figcaption>
                    </figure>
                    <ul class='currentTempHum'>
                        <li>Temperature {props.temp} {'\u2103'};</li>
                        <li>Humidity {props.humidity} %</li>
                        <li>Feels Like {props.feelsLike} {'\u2103'}</li>
                    </ul>
                </div>
                <div class='currentTimeTemp flex-row'>
                    <div class='currentTime'>{today.toLocaleDateString('en-US', formatOptions)}</div>
                </div>
                <div class='currentWind flex-row'>
                    <div>Wind Speed {props.windSpeed} kph</div>
                    <div>Direction {windDir(props.windDirection)}</div>
                </div>
            </div>
        </>
    )
}