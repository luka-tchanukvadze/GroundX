"use client";
import React from "react";
import Image from "next/image";

interface SliderItemProps {
  imageUrl: string;
  isActive: boolean;
}
function SliderItem({ imageUrl, isActive }: SliderItemProps) {
  return (
    <div className={`slider-item ${isActive ? "active" : ""} m-0 p-0`}>
      <Image
        className="m-0 object-bottom object-cover"
        src={imageUrl}
        // width={5000}
        // height={5000}
        fill
        priority
        alt="Slider Item"
      />
    </div>
  );
}

export default SliderItem;
