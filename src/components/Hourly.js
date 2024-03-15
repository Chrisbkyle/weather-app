import React, {useEffect, useState} from "react";
import HourlyCard from "./HourlyCard";
import { toUpper } from "./Utils";


export default function Hourly(props) {

    const hours24 = props.data.forcast.splice(0, 24)
    console.log(hours24)
    hours24.map((e) => console.log(e))

    const[hourlyForcast, setHourlyForcast] = useState(hours24)
    return (
        <div>
            <h1>3</h1>
            {hours24.map((e) => 
                <div>
                    <div className='hourlyCard'>
                        <div className='hourlyTime'>
                            {/* <div>{props.hour}</div> */}
                        </div>
                        <div className='flex-row'>
                            <img src={`https://openweathermap.org/img/wn/${e.weather[0].icon}.png`} alt='Hourly weather icon'></img>
                            <div>{Math.round(e.temp)} °C</div>
                        </div>
                        <div className='hourlyDescription'> 
                            <div>{toUpper(e.weather[0].description)}</div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}