import React, { useState } from 'react';
import AccordionItem from './AccordionItem.js';
import moment from 'moment';
import '../App.css';


export default function SevenDayAccordion(props) {

    const [clicked, setClicked] = useState('0')
    const [resize, setResize] = useState(false)
    let i = 1;
    const sevenDays = props.forcast.slice(0, 7)

    const handleToggle = (index) => {
        console.log(clicked)
        setResize(true)
        if (clicked === index) {
            return setClicked('0'), setResize(false);
        }
        setClicked(index)
    };



    return (
        <div className='flex-container flex-col'>
            {sevenDays.map((e, index) => (
            <div>
                <AccordionItem 
                key={index} 
                forcast={e} 
                day={moment().add(i++, 'days').calendar(null, { nextDay: '[Tomorrow]', nextWeek: 'dddd', sameElse: 'dddd'})}
                onToggle={() => handleToggle(index)} 
                active={clicked === index} 
                resize={resize}
                />
            </div>
            ))}
        </div>
    )
}