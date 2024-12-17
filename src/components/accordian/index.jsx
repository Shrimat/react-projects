import React, { useState } from "react";
import data from "./data";
import "./styles.css";

function Accordian() {
  // Selected holds the id for a single item selection
  const [selected, setSelected] = useState(null);
  // Boolean for button for multi selection
  const [enableMultiSelection, setEnableMutliSelection] = useState(false);
  // Multiple holds the array of ids of the items selected
  const [multiple, setMultiple] = useState([]);

  const handleClick = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelection = (id) => {
    let multipleCopy = [...multiple];
    const findIndexOfCurrentId = multipleCopy.indexOf(id);
    // indexOf returns -1 if the element is not in the list
    // We are trying to select multiple items in the accordian,
    // the multiple array specifies the ids of items selected
    // If the id is not in the multiple array, then add it
    // Else remove it every time the item is clicked.
    if (findIndexOfCurrentId === -1) {
      multipleCopy.push(id);
    } else {
      multipleCopy.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(multipleCopy);
  };

  console.log(multiple);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMutliSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleClick(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection ? (
                multiple.indexOf(item.id) !== -1 && (
                  <div className="content">{item.answer}</div>
                )
              ) : selected === item.id ? (
                <div className="content">{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found.</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
