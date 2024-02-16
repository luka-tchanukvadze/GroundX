"use client";
import React from "react";
import Image from "next/image";

interface SliderItemProps {
  imageUrl: string;
  isActive: boolean;
}
function SliderItem({ imageUrl, isActive }: SliderItemProps) {
  return (
    <div className={`slider-item ${isActive ? "active" : ""}`}>
      <Image
        className="m-2 object-bottom object-cover"
        src={imageUrl}
        width={5000}
        height={5000}
        alt="Slider Item"
      />
    </div>
  );
}

export default SliderItem;
