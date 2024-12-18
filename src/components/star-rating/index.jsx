import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css';

function StarRating({ numStars = 5 }) {
  // Rating specifies the number of stars that are selected/coloured in
  const [rating, setRating] = useState(0);
  // Hover specifies the number of stars that are selected when the mouse is over them
  const [hover, setHover] = useState(0);

  const handleClick = (currIndex) => {
    setRating(currIndex);
  };

  const handleMouseEnter = (currIndex) => {
    setHover(currIndex);
  };

  const handleMouseLeave = (currIndex) => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(numStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
