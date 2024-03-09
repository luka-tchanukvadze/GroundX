"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  // const handleScroll = () => {};

  const scrollToBottom = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col flex-1 pt-16 p-6 text-center">
        <h1 className="text-4xl">
          find, book, or rent a car -- quickly and easily
        </h1>

        <p>
          streamline your car rental experience with our effortless looking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="px-6 py-4 bg-blue-600 text-white rounded-full mt-10"
          handleClick={scrollToBottom}
        />
      </div>
    </div>
  );
};

export default Hero;
