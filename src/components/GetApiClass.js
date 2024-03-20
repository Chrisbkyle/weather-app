import React, { Component } from 'react'
import axios from 'axios'
import CurrentDay from './CurrentDay'
import SevenDayAccordion from './SevenDayAccordion'
import Hourly from './Hourly'
import '../App.css'

// const setTab = function(e) {
//     setActiveTab(e.target.value)
// }

class GetApiClass extends Component {
 constructor(props) {
    super(props);
    this.state = {
        current: {
            temp: '',
            humidity: '',
            feels_like: '',
            weather: [{icon: '', main: '', description: ''}],
            wind_speed: '',
            wind_deg: ''
        },
        sevenDay: {forcast: []},
        hourly: {forcast: []},
        activeTab: 'tab1' 
    }
    this.onClick = this.setTab.bind('tab1')
 }



 componentDidMount() {
    axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=-36&lon=174&appid=2fccb69a109cd8a07d1b49fdba14fc34&units=metric')
    .then((response) => {
        // console.log(response.data)
        this.setState({current: {
            temp: response.data.current.temp,
            humidity: response.data.current.humidity,
            feels_like: response.data.current.feels_like,
            weather: [{
                icon: response.data.current.weather[0].icon, 
                main: response.data.current.weather[0].main, 
                description: response.data.current.weather[0].description
            }],
            wind_speed: response.data.current.wind_speed,
            wind_deg: response.data.current.wind_deg
            },
            sevenDay: {forcast: response.data.daily},
            hourly: {forcast: response.data.hourly}
        });
    }).catch(err => {
      console.log(err)
    })
 }
 
 setTab = (e) => {
    this.setState({
        activeTab: e.target.value
    })
}

tabDisplayed = (e) => {
    console.log(this.state.activeTab)
    if(this.state.activeTab === 'tab1') {
        return <CurrentDay data={this.state.current}/>
    } else if (this.state.activeTab === 'tab2') {
        return <SevenDayAccordion  forcast={this.state.sevenDay.forcast}/>
    } else if (this.state.activeTab === 'tab3') {
        return <Hourly data={this.state.hourly} />
    } else {
        return <div>nyet!</div>
    }
}

 render() {

    return( 
            <div className='border-2 rounded-t-lg w-1000 h-500px m-auto'
            // className='mainContainer'
            >
            {/* <h1>Auckland Weather</h1> */}
                <div className='flex text-xl border-b-2'>
                        <button 
                        className="flex-2 border-x-2 border-t-2 rounded-t-lg py-1" 
                        value='tab1' 
                        onClick={this.setTab}>
                            Today
                        </button>
                        <button 
                        className="flex-2 border-x-2 border-t-2 rounded-t-lg py-1" 
                        value='tab2' 
                        onClick={this.setTab}>
                            7 Day Forcast
                        </button>
                        <button 
                        className="flex-2 border-x-2 border-t-2 rounded-t-lg py-1" 
                        value='tab3' 
                        onClick={this.setTab}>
                            Hourly
                        </button>
                </div>
                <div>
                    {this.tabDisplayed()}
                </div>
            </div>
        )
 }
}

export default GetApiClass