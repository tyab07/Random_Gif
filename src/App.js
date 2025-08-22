import logo from './logo.svg';
import './App.css';
import Srandom from './components/Srandom';
import Random from './components/Random';
function App() {
  return (
    <div className="App">
      <div className='heading'><h2>Random Gifs</h2></div>
      <Random />
     <Srandom/>
    </div>
  );
}

export default App;
