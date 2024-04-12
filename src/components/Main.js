import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CurrentDay from './CurrentDay'
import SevenDayAccordion from './SevenDayAccordion'
import Hourly from './Hourly'
import '../App.css'


export default function Main({location}) {

    let [latitude, setLatitude] = useState(location.latitude);
    let [longitude, setLongitude] = useState(location.longitude);
    let [activeTab, setActiveTab] = useState('tab1');
    let [cityName, setCityName] = useState('');
    let [data, setData] = useState();

    
    useEffect(() => { 
        axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=2fccb69a109cd8a07d1b49fdba14fc34&units=metric`)
        .then((res) => 
        setData(res.data)
            )
        .catch((err) => 
            console.log(err)
            )
        axios.get(`https://us1.locationiq.com/v1/reverse?key=pk.9d8a3172e1cc856946b0ef12fbc1f9ff&lat=${location.latitude}&lon=${location.longitude}&format=json`)
        .then((res) => {
            if('city' in res.data.address) {
                setCityName(res.data.address.city)
            } else if('county' in res.data.address) {
                setCityName(res.data.address.county)
            } else if('state' in res.data.address) {
                setCityName(res.data.address.state)
            } else if('country' in res.data.address) {
                setCityName(res.data.address.country)
            } else (
                setCityName('')
            )
            })
        .catch((err) => 
            console.log(err)
            )
    }, [])

    const setTab = (e) => {
        setActiveTab(e.target.value)
    }
    
    const tabDisplayed = (e) => {
        if(data) {
            if(activeTab === 'tab1') {
                return <CurrentDay data={data.current} location={{cityName}}/>
            } else if (activeTab === 'tab2') {
                return <SevenDayAccordion forcast={data.daily}/>
            } else if (activeTab === 'tab3') {
                console.log(data)
                return <Hourly forcast={data.hourly} />
            } else {
                return <CurrentDay data={data.current}/>
            }
        }
    }
    return(
        <>
            <div className='mainContainer'
            >
                <div className='containerTabHolder'>
                        <button 
                        className="containerTab" 
                        value='tab1' 
                        onClick={e => setTab(e)}>
                            Today
                        </button>
                        <button 
                        className="containerTab" 
                        value='tab2' 
                        onClick={e => setTab(e)}>
                            7 Day
                        </button>
                        <button 
                        className="containerTab" 
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