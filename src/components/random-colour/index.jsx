import React, { useEffect, useState } from "react";

function RandomColour() {
  const [colourType, setColourType] = useState("hex");
  const [colour, setColour] = useState("#000000");

  const randomColourUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleGenerateRandomHex = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColour = "#";

    for (let i = 0; i < 6; i++) {
      hexColour += hex[randomColourUtility(hex.length)];
    }

    setColour(hexColour);
  };

  const handleGenerateRandomRGB = () => {
    const r = randomColourUtility(256);
    const g = randomColourUtility(256);
    const b = randomColourUtility(256);

    setColour(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    colourType === "hex"
      ? handleGenerateRandomHex()
      : handleGenerateRandomRGB();
  }, [colourType]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: colour,
      }}
    >
      <button onClick={() => setColourType("hex")}>Create HEX Colour</button>
      <button onClick={() => setColourType("rgb")}>Create RGB Colour</button>
      <button
        onClick={
          colourType === "hex"
            ? handleGenerateRandomHex
            : handleGenerateRandomRGB
        }
      >
        Generate Random Colour
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{colourType === "rgb" ? "RGB Colour" : "HEX Colour"}</h3>
        <b></b>
        <h1>{colour}</h1>
      </div>
    </div>
  );
}

export default RandomColour;
