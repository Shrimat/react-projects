import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import RandomColour from './components/random-colour';
import StarRating from './components/star-rating';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';

function App(props) {
  return (
    <div className="App">
      {/* Accordian */}
      <Accordian />

      {/* Random Colour Component */}
      <RandomColour />

      {/* Star Rating Component */}
      <StarRating numStars={10}/>

      {/* Image Slider Component */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"}/>

      {/* Load More Products Component */}
      <LoadMoreData />

      {/* Tree View Component */}
      <TreeView menus={menus}/>
    </div>
  );
}

export default App;
