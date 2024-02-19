import Slider from "@/components/Slider/Slider";
import VanHero from "@/components/vans/VanHero";
import Vans from "@/components/vans/Vans";
import React from "react";

const VansPage = () => {
  return (
    <main className="m-6 flex flex-col items-center">
      <VanHero />
      <div className="w-[80%] my-16">
        <Slider />
      </div>
      <Vans />
    </main>
  );
};

export default VansPage;
