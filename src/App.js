import React, { useState } from "react";
import imagesArr from "./imageData";
import "./styles.css";

export default function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img);

  const handleClick = (imgUrl) => {
    setBigImage(imgUrl);
  };
  const images = imagesArr.map((image, index) => {
    return (
      <img
        className="thumb"
        src={image.img}
        alt={image.city}
        onClick={() => {
          handleClick(image.img);
        }}
      />
    );
  });
  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        {<img id="bigimage" src={bigImage} alt={bigImage.city} />}
      </div>
    </div>
  );
}
