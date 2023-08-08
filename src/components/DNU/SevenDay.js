// import React, {useState} from 'react';
// import AccordionItem from '../AccordionItem';
// import moment from 'moment';
// import '../App.css';


// export default function SevenDay(props) {

//     const [clicked, setClicked] = useState('0')
//     const [isSelected, setIsSelected] = useState(false)
//     const handleToggle = (index) => {
//         if (clicked === index) {
//             console.log(clicked)
//          return setClicked("0");
//         }
//         setClicked(index);
//         // if (isSelected === false) {
//         //     setIsSelected(true)
//         // } else {
//         //     setIsSelected(false)
//         // }
//        };
//     // const handleExpand = () => {
//     //     if (isSelected === false) {
//     //         setIsSelected(true)
//     //     } else {
//     //         setIsSelected(false)
//     //     }
//     // }
//     let i = 1;

//     return(
//         <>
//             <div class='sevenDayContainer'>
//                 {props.forcast.map((e, index) => (
//                     <div>
//                         <AccordionItem 
//                             key={index} 
//                             forcast={e} 
//                             day={moment().add(i++, 'days').calendar(null, { nextDay: '[Tomorrow]', nextWeek: 'dddd', sameElse: 'dddd'})}
//                             onToggle={() => handleToggle(index)}
//                             active={clicked === index}
//                             smallLarge={isSelected}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </>
//     )
// }
// {/* <div>
// {items.map((item, index) => (
//    <div key={item.title}>
//       <button onClick={() =>handleClick(index)}>{item.title}</button>
//       {index === activeIndex && <p>{item.content}</p>}
//    </div>
// ))}
// </div> */}