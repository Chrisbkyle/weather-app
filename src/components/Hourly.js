import React, {useEffect, useState} from "react";
import moment from 'moment'
import HourlyCard from "./HourlyCard";
import { toUpper } from "./Utils";



export default function Hourly({forcast}) {

    console.log(forcast)

    const [hour1, setHour1] = useState(forcast[0])
    const [hours2to24, setHours2To24] = useState(forcast.slice(1, 25))
    console.log(hours2to24)
    let i = 1;
    let b = 1;


    return (
        <div className='hourlyContainer'>
            <div className='hourlyCardLrg'>
                <div className='hourlyTime'>
                    Current
                    {/* {moment().add(i++, 'hour').format('hh') + ' ' + moment().add(b++, 'hour').format('LT').split(':')[1][3]+'M'} */}
                </div>
                <div className='flex-row'>
                    <img src={`https://openweathermap.org/img/wn/${hour1.weather[0].icon}.png`} alt='Hourly weather icon' height='75' width='75'></img>
                    <div>{Math.round(hour1.temp)} °C</div>
                </div>
                <div className='hourlyDescriptionLrg'> 
                    <div>{toUpper(hour1.weather[0].description)}</div>
                </div>
            </div>
            {hours2to24.map((e) => 
                    <div className='hourlyCard'>
                        <div className='hourlyTime'>
                            {moment().add(i++, 'hour').format('hh') + ' ' + moment().add(b++, 'hour').format('LT').split(':')[1][3]+'M'}
                        </div>
                        <div className='flex-row'>
                            <img src={`https://openweathermap.org/img/wn/${e.weather[0].icon}.png`} alt='Hourly weather icon'></img>
                            <div>{Math.round(e.temp)} °C</div>
                        </div>
                        <div className='hourlyDescription'> 
                            <div>{toUpper(e.weather[0].description)}</div>
                        </div>
                    </div>
            )}
        </div>
    )
}