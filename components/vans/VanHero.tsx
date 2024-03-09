"use client";

import React from "react";
import CustomButton from "../rent-a-car/CustomButton";

const VanHero = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };

  return (
    <div className="2xl:mx-44 xl:mx-32 md:mx-16">
      <div className="flex flex-col flex-1 pt-10 p-6 items-center justify-center">
        <h1 className="text-xl sm:text-4xl text-center">
          Effortlessly find, book, and ride in our magnificent vans.
        </h1>

        <p className="mt-4 text-sm text-center">
          Streamline your rental experience with our simple and efficient
          process.
        </p>

        <CustomButton
          title="Explore Vans"
          containerStyles="px-6 py-4 bg-blue-600 text-white rounded-full mt-10"
          handleClick={scrollToBottom}
        />
      </div>
    </div>
  );
};

export default VanHero;
