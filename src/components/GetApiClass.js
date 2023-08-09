import React, { Component } from 'react'
import axios from 'axios'
import Current from './Current';
import SevenDayAccordion from './SevenDayAccordion';
import Hourly from './HourlySlider';
import { windDir } from './Utils'
import '../App.css'

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
        hourly: {forcast: []}
    }
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

 render() {

    return( 
            <div class='mainContainer'>
            {/* <h1>Auckland Weather</h1> */}
                <Current 
                    temp={this.state.current.temp} 
                    humidity={this.state.current.humidity} 
                    feelsLike={this.state.current.feels_like} 
                    weatherIcon={this.state.current.weather[0].icon} 
                    weatherMain={this.state.current.weather[0].main} 
                    weatherDescription={this.state.current.weather[0].description} 
                    windSpeed={this.state.current.wind_speed} 
                    windDirection={this.state.current.wind_deg}
                />
                <SevenDayAccordion forcast={this.state.sevenDay.forcast}/>
                {/* <SevenDay forcast={this.state.sevenDay.forcast}/> */}
                <Hourly forcast={this.state.hourly.forcast}/>
            </div>
        )
 }
}

export default GetApiClass