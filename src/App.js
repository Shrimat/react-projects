import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import RandomColour from './components/random-colour';
import StarRating from './components/star-rating';

function App(props) {
  return (
    <div className="App">
      {/* Accordian */}
      {/* <Accordian /> */}

      {/* Random Colour Component */}
      {/* <RandomColour /> */}

      {/* Star Rating Component */}
      {/* <StarRating numStars={10}/> */}

      {/* Image Slider Component */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"}/>
    </div>
  );
}

export default App;
