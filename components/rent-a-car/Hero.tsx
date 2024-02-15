"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div>
      <div className="flex justify-center items-center flex-col flex-1 pt-16 p-6">
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
          handleClick={handleScroll}
        />
      </div>

      {/* <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image
            src="/rentcar.png"
            alt="hero"
            fill
            className="object-contain"
          />
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className="absolute xl:-top-0 xl:right-0 bg-blue-600 bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden rounded-full" />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
