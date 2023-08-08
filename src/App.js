import './App.css';
import GetApiClass from './components/GetApiClass';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center', color: 'white'}}>Auckland Weather</h1>
      <GetApiClass />
    </div>
  );
}

export default App;
