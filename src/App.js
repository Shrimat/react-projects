import './App.css';
import Accordian from './components/accordian';
import RandomColour from './components/random-colour';

function App(props) {
  return (
    <div className="App">
      {/* Accordian */}
      <Accordian />

      {/* Random Colour Component */}
      <RandomColour />
    </div>
  );
}

export default App;
