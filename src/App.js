import './App.css';
import {useState, useEffect} from 'react';
import Header from './components/Header';
import GetApi from './components/GetApiClass';
import Footer from './components/Footer';



function App() {

  let [latitude, setLatitude] = useState();
  let [longitude, setLongitude] = useState();

    let setLocation = () => {
        if("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(e) {
              setLatitude(e.coords.latitude.toFixed(3))
              setLongitude(e.coords.longitude.toFixed(3))
            })
          } else {
            setLatitude(-34)
            setLongitude(174)
          }
    }
  setLocation();
  return (
    <div className="App">
      <Header location={{latitude, longitude}}/>
      {/* <GetApi /> */}
      <Footer />
    </div>
  );
}

export default App;
