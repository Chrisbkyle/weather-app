import React, {useState, useEffect} from "react";
import axios from 'axios'



const Header = ({location}) => {

    let [latitude, setLatitude] = useState(location.latitude);
    let [longitude, setLongitude] = useState(location.longitude);
    let [cityName, setCityName] = useState('nyet');


    useEffect(() => {
        axios.get(`https://us1.locationiq.com/v1/reverse?key=pk.9d8a3172e1cc856946b0ef12fbc1f9ff&lat=${location.latitude}&lon=${location.longitude}&format=json`)
        .then((res) => {
            // console.log(res),
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
    }, [latitude, longitude])


    return(
        <>
            <h1>{cityName} Weather</h1>
        </>
    )
}

export default Header