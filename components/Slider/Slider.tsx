"use client";
import styled from "styled-components";

import { useState, useEffect } from "react";
import SliderControl from "./SliderControl";
import SliderItem from "./SliderItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

// import SliderItem from "./SliderItem";
// import SliderControl from "./SliderControl";

const images = ["/van18.jpg", "/van4.jpg", "/vanlx.webp", "/van1.png"];
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

  const path = usePathname().toString();

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
              handleClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <Link href="special-offer">
          <Text
            className={`${
              path.startsWith("/special-offer")
                ? ""
                : "animate-bounce py-2 px-4 backdrop-blur-3xl rounded-full"
            } `}
          >
            {path.startsWith("/special-offer")
              ? "Find Your Van"
              : "Special Offer"}
          </Text>
        </Link>
      </div>
    </SliderContainer>
  );
}

export default Slider;

const SliderContainer = styled.div`
  position: relative;
  /* width: "40rem";
  height: "30rem"; */
`;

const Text = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  line-height: 2rem;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);

  @media screen and (min-width: 800px) {
    font-size: 20px;
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
