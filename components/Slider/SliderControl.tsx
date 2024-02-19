"use client";
import React from "react";
import { MouseEventHandler } from "react";

// interface SliderControlProps {
//   index: number;
//   activeIndex: number;
//   handleClick: ;
// }
// index, activeIndex, onClick
function SliderControl({ index, activeIndex, handleClick }: any) {
  const isActive = index === activeIndex;
  return (
    <div
      className={`slider-control ${isActive ? "active" : ""}`}
      onClick={() => handleClick(index)}
    ></div>
  );
}

export default SliderControl;
