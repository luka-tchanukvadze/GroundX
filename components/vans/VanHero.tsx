import React from "react";
import CustomButton from "../rent-a-car/CustomButton";
import Image from "next/image";
import Slider from "../Slider/Slider";
const VanHero = () => {
  return (
    <div className="2xl:mx-44 xl:mx-32 md:mx-16">
      <div className="flex flex-col flex-1 pt-10 p-6 items-center justify-center">
        <h1 className="text-xl sm:text-4xl text-center">
          Transform your journey with our revolutionary van rental experience!
          Dive into a captivating adventure where every moment is filled with
          excitement and ease. This isn't just a rental, it's your gateway to
          unforgettable memories.
        </h1>

        <p className="mt-4 text-sm text-center">
          Immerse yourself in the ultimate van rental experience and savor the
          journey with our exclusive special offer. Book now and relish the
          added perks that make your adventure truly exceptional.
        </p>

        <CustomButton
          title="Explore Vans"
          containerStyles="px-6 py-4 bg-blue-600 text-white rounded-full mt-10"
          // handleClick={handleScroll}
        />
      </div>

      {/* <div className="mx-16 xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image
            src="/rentcar.png"
            alt="hero"
            fill
            className="object-contain"
          />
          <div className="absolute xl:-top-0 xl:right-0 bg-blue-400 bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden rounded-sm" />
        </div>
      </div> */}
      <Slider />
    </div>
  );
};

export default VanHero;
