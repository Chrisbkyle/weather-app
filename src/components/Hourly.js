import React, {useState} from "react";
import HourlyCard from "./HourlyCard";


export default function Hourly(props) {


    // props.data.forcast.map((e) => console.log(e))
    // console.log(props.data.forcast)
    const hours24 = props.data.forcast.splice(0, 24)

    const[hourlyForcast, setHourlyForcast] = useState(hours24)
    // console.log(hourlyForcast)
    return (
        <div>
            <h1>3</h1>
            {hours24.map((e) => 
                <div>
                    <HourlyCard forcast={e}/>
                </div>
            )}

        </div>
    )
}