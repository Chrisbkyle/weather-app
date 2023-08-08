import React, {useEffect, useRef} from 'react';
import HourlyCard from './HourlyCard'
import moment from 'moment'
import '../App.css';


export default function Hourly(props) {

    let i = 1;
    let b = 1;
    const slider = useRef(null);
    let isDown = useRef(false);
    let startX = useRef(null);
    let scrollLeft = useRef(null);
    let hour24 = props.forcast.splice(0, 24);

    useEffect(() => {
        if (slider && slider.current) {
          let sliderRef = slider.current;
          sliderRef.addEventListener("mousedown", down);
          sliderRef.addEventListener("mouseup", up);
          sliderRef.addEventListener("mousemove", move);
    
          return () => {
            sliderRef.removeEventListener("mousedown", down);
            sliderRef.removeEventListener("mouseup", up);
            sliderRef.removeEventListener("mousemove", move);
          };
        }
      }, []);

      function down(e) {
        isDown.current = true;
        startX.current = e.pageX - slider.current.offsetLeft;
        scrollLeft.current = slider.current.scrollLeft;
      }
    
      function up() {
        isDown.current = false;
      }
    
      function move(e) {
        if (!isDown.current) return;
        e.preventDefault();
        const x = e.pageX - slider.current.offsetLeft;
        const walk = x - startX.current;
        slider.current.scrollLeft = scrollLeft.current - walk;
      }


    return(
        <>
        <div class='hourlyContainer'>
          <h4 className='hourlyTitle'>Hourly Forcast</h4>
            <div class='hourlyCarousel' ref={slider}>
                {hour24.map((e) =>
                <div>
                    <HourlyCard 
                        forcast={e}
                        hour={moment().add(i++, 'hour').format('hh') + ' ' + moment().add(b++, 'hour').format('LT').split(':')[1][3]+'M'}
                    />
                </div>
                )}
            </div>
        </div>
        </>
    )
}