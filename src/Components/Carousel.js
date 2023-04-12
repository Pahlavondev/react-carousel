import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../Helpers/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currentImage].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currentImage > 0 && setCurrentImage(currentImage - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </div>

        <div className="center">
          <h1>{images[currentImage].title}</h1>
          <p>{images[currentImage].subtitle}</p>
        </div>

        <div
          className="right"
          onClick={() => {
            currentImage < images.length - 1 &&
              setCurrentImage(currentImage + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
