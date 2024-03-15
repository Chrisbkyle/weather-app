import React, {useState} from 'react'
import { toUpper } from './Utils'



export default function HourlyCard(props) {

    // console.log(props.forcast.weather[0].icon)

    const [forcast, setForcast] = useState(props.forcast)

    return(
        <div>
            <div className='hourlyCard'>
                <div className='hourlyTime'>
                    {/* <div>{props.hour}</div> */}
                </div>
                <div className='flex-row'>
                    <img src={`https://openweathermap.org/img/wn/${forcast.weather[0].icon}.png`} alt='Hourly weather icon'></img>
                    <div>{Math.round(forcast.temp)} °C</div>
                </div>
                <div className='hourlyDescription'> 
                    <div>{toUpper(forcast.weather[0].description)}</div>
                </div>
            </div>
        </div>
    )
}