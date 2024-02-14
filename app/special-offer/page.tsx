import VanHero from "@/components/vans/VanHero";
import Vans from "@/components/vans/Vans";
import React from "react";

const VansPage = () => {
  return (
    <main className="m-6">
      <VanHero />
      <Vans />
    </main>
  );
};

export default VansPage;
