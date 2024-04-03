import './App.css';
import {useState, useEffect} from 'react';
import Header from './components/Header';
import GetApi from './components/GetApiClass';
import Footer from './components/Footer';



function App() {


  return (
    <div className="App">
      <Header />
      {/* <GetApi /> */}
      <Footer />
    </div>
  );
}

export default App;
