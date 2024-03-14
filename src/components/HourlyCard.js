import React, {useState} from 'react'
import { toUpper } from './Utils'



export default function HourlyCard(props) {

    // console.log(props.forcast.weather[0].icon)

    const [forcast, setForcast] = useState(props.forcast)

    return(
        <div>
            <h2>card test</h2>
            {/* <div className='hourlyCard'>
                <div className='hourlyTime'>
                    <div>{props.hour}</div>
                </div>
                <div className='flex-row'>
                    <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`} alt='Hourly weather icon'></img>
                    <div>{Math.round(props.data.temp)} °C</div>
                </div>
                <div className='hourlyDescription'> 
                    <div>{toUpper(props.data.weather[0].description)}</div>
                </div>
            </div> */}
            <div className='hourlyCard'>
                <div className='hourlyTime'>
                    {/* <div>{props.hour}</div> */}
                </div>
                <div className='flex-row'>
                    <img src={`https://openweathermap.org/img/wn/${props.forcast.weather[0].icon}.png`} alt='Hourly weather icon'></img>
                    <div>{Math.round(props.forcast.temp)} °C</div>
                </div>
                <div className='hourlyDescription'> 
                    <div>{toUpper(props.forcast.weather[0].description)}</div>
                </div>
            </div>
        </div>
    )
}