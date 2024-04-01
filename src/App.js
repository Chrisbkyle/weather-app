import './App.css';
import {useState, useEffect} from 'react';
import GetApiClass from './components/GetApiClass';
import Footer from './components/Footer';

function App() {

  // const [position, setPosition] = useState({})

  // const [latitude, setLatitude] = useState()
  // const [longitude, setLongitude] = useState()


  // useEffect(() => {
  //   // console.log(city)

  //   if("geolocation" in navigator) {
  //     console.log("these are the droids you're looking for");
  //     navigator.geolocation.getCurrentPosition(function(e) {
  //       console.log(e.coords)
  //       setLatitude(e.coords.latitude.toFixed(3))
  //       setLongitude(e.coords.longitude.toFixed(3))
  //     })
  //   } else {
  //     console.log("theses aren't the droids you're looking for");
  //   }
  // })


  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Auckland Weather</h1>
      <GetApiClass 
      // location={{latitude, longitude}}
      />
      <Footer />
    </div>
  );
}

export default App;
