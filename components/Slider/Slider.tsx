"use client";
import styled from "styled-components";

import { useState, useEffect } from "react";
import SliderControl from "./SliderControl";
import SliderItem from "./SliderItem";

// import SliderItem from "./SliderItem";
// import SliderControl from "./SliderControl";

const images = [
  // "/assets/homepage/homepage.png",
  "/rentcar.png",
  "/rentcar.png",
  "/rentcar.png",
  "/rentcar.png",
];
function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImageUrl, setCurrentImageUrl] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setCurrentImageUrl(images[activeIndex]);
  }, [activeIndex]);

  const handleControlClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <SliderContainer>
      <div className="slider-container">
        <div className="slider">
          {images.map((_, index) => (
            <SliderItem
              key={index}
              imageUrl={currentImageUrl}
              isActive={index === activeIndex}
            />
          ))}
        </div>

        <div className="slider-controls">
          {images.map((_, index) => (
            <SliderControl
              key={index}
              index={index}
              activeIndex={activeIndex}
              handleClick={handleControlClick}
            />
          ))}
        </div>
      </div>
      <Text>Some Text Here</Text>
    </SliderContainer>
  );
}

export default Slider;

const SliderContainer = styled.div`
  position: relative;
`;

const Text = styled.div`
  display: none;

  @media screen and (min-width: 800px) {
    display: block;
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    line-height: 2rem;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  }

  @media screen and (min-width: 1300px) {
    bottom: 45px;
    left: 45px;
    font-size: 24px;
  }

  @media screen and (min-width: 1600px) {
    font-size: 32px;
  }
`;