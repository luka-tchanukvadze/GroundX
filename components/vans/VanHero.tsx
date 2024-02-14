import React from "react";
import CustomButton from "../rent-a-car/CustomButton";
import Image from "next/image";

const VanHero = () => {
  return (
    <div>
      <div className="flex-1 pt-10 p-6">
        <h1 className="text-xl sm:text-4xl">
          Embark on a revolutionary van rental experience with our brand-new,
          exclusive special offer! Unleash the extraordinary as you explore,
          book, or rent a van effortlessly through our cutting-edge platform.
          This isn't just any offer; it's a game-changer designed to elevate
          your journey to unprecedented heights.
        </h1>

        <p className="mt-4 text-sm">
          Indulge in the ultimate van rental experience and savor the journey
          with our exclusive special offer. Book now and relish the added perks
          that make your adventure truly exceptional.
        </p>

        <CustomButton
          title="Explore Vans"
          containerStyles="px-6 py-4 bg-blue-600 text-white rounded-full mt-10"
          // handleClick={handleScroll}
        />
      </div>

      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          {/* <Image src="/van1.png" alt="hero" fill className="object-contain" /> */}
          <div className="absolute xl:-top-0 xl:right-0 bg-blue-100 bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default VanHero;
