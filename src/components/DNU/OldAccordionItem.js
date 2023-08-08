// import React, { useRef } from 'react';
// import '../App.css'



// export default function OldAccordionItem({forcast, day, onToggle, active, smallLarge}) {
//     // console.log(forcast)

//     const contentEl = useRef()

//     return(
//         <>
//             <div className={`accordion_item ${active ? "active" : ""}`}>

//                 <div>
//                     <div className='button' onClick={onToggle}>{day}<span className="control">{active ? '\u25B2' : '\u25BC'}</span></div>
//                 </div>
                
//                 <div 
//                     ref={contentEl} 
//                     className={`answer_wrapper ${active ? "open" : ""}`}   
//                     style={active ? { height: contentEl.current.scrollHeight } : { height: "0px" }}
//                     >

//                     <div>Low Temp {forcast.temp.min}</div>
//                     <div>High Temp {forcast.temp.max}</div>
//                     <div>Morning Feels Like{forcast.feels_like.morn}</div>
//                     <div>Afternoon Feels Like {forcast.feels_like.day}</div>
//                     <div>Evening Feels Like {forcast.feels_like.eve}</div>
//                     <div>Humidity {forcast.humidity}</div>
//                     <div>Weather {forcast.weather[0].main}</div>
//                     <div>Weather Description {forcast.weather[0].description}</div>
//                     <img src={`https://openweathermap.org/img/wn/${forcast.weather[0].icon}.png`}></img>
//                     <div>Day Summary {forcast.summary}</div>    
//                     <div>Wind Speed {forcast.wind_speed}</div>
//                     <div>Wind Direction(in degree){forcast.wind_deg}</div>
//                 </div>   
//             </div>
//         </>
//     )
// }