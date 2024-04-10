import React , {useState} from "react";
import { toUpper, windDir } from './Utils';

const utcToHours = (utc) => {
    let time = new Date(utc);
    let hour = time.getHours();
    let minutes = time.getMinutes();
    console.log(time)
    return hour +':'+ minutes   
}

export default function CurrentDay(props) {

    console.log(props.data)


    
    let today = new Date()
    let formatOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div>
            <div className='currentContainer'>
                <div className='currentWeather flex-row'>
                    <figure>
                        <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`} alt='icon of the current weather'/>
                        <figcaption>{toUpper(props.data.weather[0].description)}</figcaption>
                    </figure>
                    <ul className='currentTempHum'>
                        <li>Temperature {props.data.temp}{'\u2103'}</li>
                        <li>Humidity {props.data.humidity}%</li>
                        <li>Feels Like {props.data.feels_like}{'\u2103'}</li>
                        <br></br>
                        <li>Sunrise {utcToHours(props.data.sunrise) + 'AM'}</li>
                        <li>Sunset {utcToHours(props.data.sunset) + 'PM'}</li>
                    </ul>
                </div>
                <div className='currentTimeTemp flex-row'>
                    <div className='currentTime'>{today.toLocaleDateString('en-US', formatOptions)}</div>
                </div>
                <div className='currentWind flex-row'>
                    <div>Wind Speed {props.data.wind_speed} kph</div>
                    <img src={'./resources/Dircetion/N.png'}></img>
                    <div>Direction {windDir(props.data.wind_deg)}</div>    
                </div>
            </div>
        </div>
    )
}