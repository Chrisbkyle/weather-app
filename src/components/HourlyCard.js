import React from 'react'
import { windDir, toUpper } from './Utils'
import moment from 'moment'



export default function HourlyCard(props) {


    return(
        <div>
            <div className='hourlyCard'>
                <div className='hourlyTime'>
                    <div>{props.hour}</div>
                </div>
                <div className='flex-row'>
                    <img src={`https://openweathermap.org/img/wn/${props.forcast.weather[0].icon}.png`}></img>
                    {/* <img src={smallIcon(e.weather[0].icon)}></img> */}
                    <div>{Math.round(props.forcast.temp)} °C</div>
                </div>
                <div className='hourlyDescription'> 
                    <div>{toUpper(props.forcast.weather[0].description)}</div>
                </div>
            </div>
        </div>
    )
}