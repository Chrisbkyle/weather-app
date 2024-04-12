import './App.css';
import {useState, useEffect} from 'react';
import Main from './components/Main';
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
          return
        }
  }
  useEffect(() => {
    setLocation();}, [latitude, longitude]
    )

  const condRender = () => {
    if (latitude || longitude) {
      return (
        <>
          <Main location={{latitude, longitude}}/> 
        </>
        )
    }
  }
  return (
    <div className="App">
      {condRender()}
      <Footer />
    </div>
  );
}

export default App;
