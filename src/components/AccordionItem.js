import React from 'react';
import '../App.css'
import { toUpper, windDir } from './Utils';

export default function AccordionItem({key, forcast, onToggle, active, resize, day}) {

    // console.log(forcast )


    return(
        <div className='flex-item flex-row'>
            <div onClick={onToggle} className={`flex-item-header ${resize ? 'small' : ''}`}>
                <div>{day}               {active ? '\u25B2' : '\u25BC'} </div>
            </div>
            <div className={`flex-item-content flex-col ${active ? 'showing' : ''}`}>
                <div className='weekDescription flex-row'>
                    <figure>
                        <img src={`https://openweathermap.org/img/wn/${forcast.weather[0].icon}.png`} alt="Weekly weather icon"></img>
                        <figcaption>{toUpper(forcast.weather[0].description)}</figcaption>
                    </figure>
                    <div>{forcast.summary}</div>
                </div>
                <div className='weekTempWind flex-row'>
                    <div>
                        <div>Low Temp {Math.round(forcast.temp.min)} °C</div>
                        <div>High Temp {Math.round(forcast.temp.max)} °C</div>
                        <div>Humidity {forcast.humidity} %</div>
                    </div>
                    <div>
                        <div>Wind Speed {forcast.wind_speed} kph</div>
                        <div>Wind Direction {windDir(forcast.wind_deg)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}