import React from 'react'


export default function Footer() {
    return(
        <div>
            <div className='footer'>
                <div className='footerText'>Made using weather data from <a href='https://www.openweathermap.org' target="_blank"> One Call API 3.0</a> & geocoding with <a href='https://locationiq.com/' target='_blank'>LocationIQ</a></div>
            </div>
        </div>
    )
}