import React , {useState, useEffect} from "react";
import { toUpper, windDir } from './Utils';
import N from '../resources/Direction/N.png'
import NE from '../resources/Direction/NE.png'
import E from '../resources/Direction/E.png'
import SE from '../resources/Direction/SE.png'
import S from '../resources/Direction/S.png'
import SW from '../resources/Direction/SW.png'
import W from '../resources/Direction/W.png'
import NW from '../resources/Direction/NW.png'

const utcToHours = (utc) => {
    let time = new Date(utc);
    let hour = time.getHours();
    let minutes = time.getMinutes();
    console.log(time)
    return hour +':'+ minutes   
}

export default function CurrentDay(props) {

    console.log(props)

    const [compassDir, setCompassDir] = useState(windDir(props.data.wind_deg))
    const [cityName, setCityName] = useState();

    useEffect(() => {
        setCityName(props.location.cityName)
    })

    const windDirImg = (dir) => {
        if(dir === 'N') {
            return <img src={N} alt="direction N"></img>
        } else if(dir === 'NE') {
            return <img src={NE} alt="direction NE"></img>
        } else if(dir === 'E') {
            return <img src={E} alt="direction E"></img>
        } else if(dir === 'SE') {
            return <img src={SE} alt="direction SE"></img>
        } else if(dir === 'S') {
            return <img src={S} alt="direction S"></img>
        } else if(dir === 'SW') {
            return <img src={SW} alt="direction SW"></img>
        } else if(dir === 'W') {
            return <img src={W} alt="direction W"></img>
        } else if(dir === 'NW') {
            return <img src={NW} alt="direction NW"></img>
        } else {
            return 
        }
    }

    const nameRender = () => {
        if(cityName) {
            return(
                <div className='currentContainer'>
                <div className='currentWeather flex-row'>
                    <figure>
                        <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`} alt='icon of the current weather'/>
                        <figcaption>{toUpper(props.data.weather[0].description)}</figcaption>
                    </figure>
                </div>
                <div className='currentTempHum'>
                <h1 className='header'>{today.toLocaleDateString('en-US', formatOptions)}</h1>
                    <ul>
                        <li>Temperature {props.data.temp}{'\u2103'}</li>
                        <li>Humidity {props.data.humidity}%</li>
                        <li>Feels Like {props.data.feels_like}{'\u2103'}</li>
                        <br></br>
                        <li>Sunrise {utcToHours(props.data.sunrise) + 'AM'}</li>
                        <li>Sunset {utcToHours(props.data.sunset) + 'PM'}</li>
                    </ul>
                </div>
                <div className='currentTimeTemp flex-row'>
                    <div className='currentTime'>{cityName} Weather</div>
                </div>
                <div className='currentWind'>
                    <div className='currentWindSpeed'>{Math.round(props.data.wind_speed)} <br></br>kph</div>  
                    <div>{windDirImg(compassDir)}</div>  
                    <div>Wind Speed</div>
                    <div>Direction {windDir(props.data.wind_deg)}</div>
                </div>
            </div>
            )
        }
    }

    
    let today = new Date()
    let formatOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div>
            {nameRender()}
        </div>
    )
}