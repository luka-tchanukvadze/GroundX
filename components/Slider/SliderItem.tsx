"use client";
import React from "react";

// imageUrl, isActive
interface SliderItemProps {
  imageUrl: string;
  isActive: boolean;
}
function SliderItem({ imageUrl, isActive }: SliderItemProps) {
  return (
    <div className={`slider-item ${isActive ? "active" : ""}`}>
      <img src={imageUrl} alt="Slider Item" />
    </div>
  );
}

export default SliderItem;
