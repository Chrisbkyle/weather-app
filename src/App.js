import './App.css';
import GetApiClass from './components/GetApiClass';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center', color: 'white'}}>Auckland Weather</h1>
      <GetApiClass />
      <Footer />
    </div>
  );
}

export default App;
