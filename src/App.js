import './App.css';
import Accordian from './components/accordian';
import RandomColour from './components/random-colour';
import StarRating from './components/star-rating';

function App(props) {
  return (
    <div className="App">
      {/* Accordian */}
      <Accordian />

      {/* Random Colour Component */}
      <RandomColour />

      {/* Star Rating Component */}
      <StarRating numStars={10}/>
    </div>
  );
}

export default App;
