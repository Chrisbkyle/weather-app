import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CurrentDay from './CurrentDay'
import SevenDayAccordion from './SevenDayAccordion'
import Hourly from './Hourly'
import '../App.css'

// const setTab = function(e) {
//     setActiveTab(e.target.value)
// }

export default function GetApi() {

    let [latitude, setLatitude] = useState();
    let [longitude, setLongitude] = useState();
    let [activeTab, setActiveTab] = useState();
    let [cityName, setCityName] = useState();
    let [data, setData] = useState();


    // let setLocation = () => {
    //     if("geolocation" in navigator) {
    //         navigator.geolocation.getCurrentPosition(function(e) {
    //           setLatitude(e.coords.latitude.toFixed(3))
    //           setLongitude(e.coords.longitude.toFixed(3))
    //         })
    //       } else {
    //         setLatitude(-34),
    //         setLongitude(174)
    //       }
    // }
    
    const handleClick = () => {
        console.log(latitude, longitude)
    }

    const fetchData = async (lat, long) => {
        axios.get(`https://us1.locationiq.com/v1/reverse?key=pk.9d8a3172e1cc856946b0ef12fbc1f9ff&lat=${lat}&lon=${long}&format=json`)
        .then((res) => 
            // console.log(res)
            setCityName(res.data.address.city)
            )
        .catch((err) => 
            console.log(err)
            )
        axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=2fccb69a109cd8a07d1b49fdba14fc34&units=metric`)
        .then((res) => 
        setData(res.data)
            )
        .catch((err) => 
            console.log(err)
            )
    }
    useEffect(() => { 

    }, [])

    const setTab = (e) => {
        setActiveTab(e.target.value)
    }
    
    const tabDisplayed = (e) => {
        console.log(activeTab)
        // console.log(data.current)
        if(activeTab === 'tab1') {
            console.log(data.current)
            return <CurrentDay data={data}/>
        } else if (activeTab === 'tab2') {
            console.log(data)
            return <SevenDayAccordion  
            forcast={data.daily}
            />
        } else if (activeTab === 'tab3') {
            console.log(data.hourly)
            return <Hourly 
            data={data.hourly} 
            />
        } else {
            return <div>nyet!</div>
        }
    }
    return(
        <>
            <h1 style={{textAlign: 'center'}}>{cityName} Weather</h1>
            <div className='border-2 rounded-t-lg w-1000px h-575px m-auto bg-folder'
            // className='mainContainer'
            >
            {/* <h1>Auckland Weather</h1> */}
            <button onClick={e => handleClick(e)}>ClickMe</button>
                <div className='flex text-xl border-b-2'>
                        <button 
                        className="flex-2 border-x-2 border-t-2 rounded-t-lg py-1" 
                        value='tab1' 
                        onClick={e => setTab(e)}>
                            Today
                        </button>
                        <button 
                        className="flex-2 border-x-2 border-t-2 rounded-t-lg py-1" 
                        value='tab2' 
                        onClick={e => setTab(e)}>
                            7 Day Forcast
                        </button>
                        <button 
                        className="flex-2 border-x-2 border-t-2 rounded-t-lg py-1" 
                        value='tab3' 
                        onClick={e => setTab(e)}>
                            Hourly
                        </button>
                </div>
                <div>
                    {tabDisplayed()}
                </div>
            </div>
        </>
    )
}
// class GetApiClass extends Component {
//  constructor(props) {
//     super(props);
//     this.state = {
//         latitude: this.props.location.latitude,
//         longitude: this.props.longitude,
//         cityName: 'Auckland',
//         current: {
//             temp: '',
//             humidity: '',
//             feels_like: '',
//             weather: [{icon: '', main: '', description: ''}],
//             wind_speed: '',
//             wind_deg: ''
//         },
//         sevenDay: {forcast: []},
//         hourly: {forcast: []},
//         activeTab: 'tab1' 
//     }
//     this.onClick = this.setTab.bind('tab1')
//  }

//  componentDidMount() {
//     console.log(this.state)
//     axios.get(`https://us1.locationiq.com/v1/reverse?key=pk.9d8a3172e1cc856946b0ef12fbc1f9ff&lat=${this.props.location.latitude}&lon=${this.props.location.longitude}&format=json`)
//     .then((response) => {
//         this.setState({
//             cityName: response.data.city
//         })
//         console.log(this.props)
//     }).catch((err) => {
//         console.log(err)
//     })
//     .then((res) =>{
//         axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${this.props.location.latitude}&lon=${this.props.location.longitude}&appid=2fccb69a109cd8a07d1b49fdba14fc34&units=metric`)
//         .then((response) => {
//             this.setState({current: {
//                 temp: response.data.current.temp,
//                 humidity: response.data.current.humidity,
//                 feels_like: response.data.current.feels_like,
//                 weather: [{
//                     icon: response.data.current.weather[0].icon, 
//                     main: response.data.current.weather[0].main, 
//                     description: response.data.current.weather[0].description
//                 }],
//                 wind_speed: response.data.current.wind_speed,
//                 wind_deg: response.data.current.wind_deg
//                 },
//                 sevenDay: {forcast: response.data.daily},
//                 hourly: {forcast: response.data.hourly}
//             });
//         }).catch((err) => {
//           console.log(err)
//         })
//     })


//  }
 
//  setTab = (e) => {
//     this.setState({
//         activeTab: e.target.value
//     })
// }

// tabDisplayed = (e) => {
//     // console.log(this.state.activeTab)
//     if(this.state.activeTab === 'tab1') {
//         // console.log(this.state.current)
//         return <CurrentDay data={this.state.current}/>
//     } else if (this.state.activeTab === 'tab2') {
//         // console.log(this.state.sevenDay.forcast)
//         return <SevenDayAccordion  forcast={this.state.sevenDay.forcast}/>
//     } else if (this.state.activeTab === 'tab3') {
//         // console.log(this.state.hourly)
//         return <Hourly data={this.state.hourly} />
//     } else {
//         return <div>nyet!</div>
//     }
// }

//  render() {
//     return( 
//         <>
//             <h1 style={{textAlign: 'center'}}>{this.state.cityName} Weather</h1>
//             <div className='border-2 rounded-t-lg w-1000px h-575px m-auto bg-folder'
//             // className='mainContainer'
//             >
//             {/* <h1>Auckland Weather</h1> */}
//                 <div className='flex text-xl border-b-2'>
//                         <button 
//                         className="flex-2 border-x-2 border-t-2 rounded-t-lg py-1" 
//                         value='tab1' 
//                         onClick={this.setTab}>
//                             Today
//                         </button>
//                         <button 
//                         className="flex-2 border-x-2 border-t-2 rounded-t-lg py-1" 
//                         value='tab2' 
//                         onClick={this.setTab}>
//                             7 Day Forcast
//                         </button>
//                         <button 
//                         className="flex-2 border-x-2 border-t-2 rounded-t-lg py-1" 
//                         value='tab3' 
//                         onClick={this.setTab}>
//                             Hourly
//                         </button>
//                 </div>
//                 <div>
//                     {this.tabDisplayed()}
//                 </div>
//             </div>
//         </>
//         )
//  }
// }

// export default GetApiClass