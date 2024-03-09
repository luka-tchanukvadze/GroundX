import Slider from "@/components/Slider/Slider";
import VanHero from "@/components/vans/VanHero";
import Vans from "@/components/vans/Vans";
import React from "react";

const VansPage = () => {
  return (
    // <main className="m-6 flex flex-col items-center">
    <main className="overflow-hidden flex flex-col items-center  2xl:mx-44 xl:mx-32 md:mx-16 mt-6">
      <VanHero />
      <div className="w-[80%] my-12">
        <Slider />
      </div>
      <Vans />
    </main>
  );
};

export default VansPage;
