import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

function ImageSlider({ url, limit }) {
  const [images, setImages] = useState([]);
  // Index of the current slide selected in the image slider
  const [currSlide, setCurrSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePrev = () => {
    console.log(currSlide);
    setCurrSlide((prev) => ((prev - 1 + images.length) % images.length));
  };

  const handleNext = () => {
    setCurrSlide((prev) => (prev + 1) % images.length);
  };

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  if (loading) {
    return <div>Loading data, please wait.</div>;
  }

  if (errorMsg) {
    return <div>Error occurred: {errorMsg}</div>;
  }

  console.log(images);

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((image, index) => {
            return (
              <img
                key={image.id}
                alt={image.download_url}
                src={image.download_url}
                className={
                  currSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            );
          })
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicator">
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button
                  key={index}
                  className={
                    currSlide === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  onClick={() => setCurrSlide(index)}
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
}

export default ImageSlider;
