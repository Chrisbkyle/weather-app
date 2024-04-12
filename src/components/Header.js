import React, {useState} from "react";



const Header = ({location}) => {

    let [cityName, setCityName] = useState(location.cityName);

    return(
        <>
            <h1 className='header'>{cityName} Weather</h1>
        </>
    )
}

export default Header