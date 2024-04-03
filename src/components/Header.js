import React, {useState, useEffect} from "react";
import axios from 'axios'




export default function Header() {

    let [latitude, setLatitude] = useState(49);
    let [longitude, setLongitude] = useState(-123);
    let [cityName, setCityName] = useState('nyet');

    console.log(cityName)

    useEffect(() => {
        axios.get(`https://us1.locationiq.com/v1/reverse?key=pk.9d8a3172e1cc856946b0ef12fbc1f9ff&lat=${latitude}&lon=${longitude}&format=json`)
        .then((res) => 
        if('city' in res.data.address)
            console.log(res),
            setCityName(res.data.address.city)
            )
        .catch((err) => 
            console.log(err)
            )
    }, [cityName])


    return(
        <>
            <h1>{cityName} Weather</h1>
        </>
    )
}