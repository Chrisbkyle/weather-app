// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import Current from '../Current';
// import SevenDay from './SevenDay';
// import Hourly from '../Hourly';




// export default function GetApi() {

//     let [current, setCurrent] = useState({
//       temp: '',
//       humidity: '',
//       feelsLike: '',
//       weather: [{icon: '',
//         main: '',
//         description: ''}],
//       windSpeed: '',
//       windDirection: ''
//     })
//     let [sevenDay, setSevenDay] = useState({forcast : []})
//     let [hourly, setHourly] = useState({forcast: []})
//     let [time, setTime] = useState()

//     useEffect(() => {
//         axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=-36&lon=174&appid=2fccb69a109cd8a07d1b49fdba14fc34&units=metric')
//           .then(function (response) { 
//             setCurrent(response.data.current)
//             setSevenDay(response.data.daily)    
//             setHourly(response.data.hourly)
//             console.log(response.data.current)
//             setTime(new Date(response.date.current.dt))
//           }).catch(err => {
//             console.log(err)
//           })
//         }, [])

//         // console.log(time)
//     return(
//         <>
//             <Current 
//                 temp={current.temp} 
//                 humidity={current.humidity} 
//                 feelsLike={current.feels_like} 
//                 weatherIcon={current.weather[0].icon} 
//                 weatherMain={current.weather[0].main} 
//                 weatherDescription={current.weather[0].description} 
//                 windSpeed={current.wind_speed} 
//                 windDirection={current.wind_deg}
//             />
//             <SevenDay forcastSevenDay={sevenDay}/>  
//             <Hourly forcast={hourly}/>   
//         </>
//     )
// }