"use client";

import CardsList from "@/data/CardsList";
import React, { useState } from "react";
import Image from "next/image";

function Cards() {
  const [activeIndex, setActiveIndex] = useState<any>();

  return (
    <div>
      <h2>Payment Methodes</h2>

      {/* <div className="grid grid-cols-5 m-2 "> */}
      <div className="flex  gap-4 justify-center">
        {CardsList.map((item, index) => (
          <div
            key={index}
            className={`w-[50px]  border-2 flex items-center justify-center rounded-md
          cursor-pointer
          hover:border-cyan-100
          hover:scale-110 transition-all
          ${activeIndex === index ? "border-cyan-400" : null}
          `}
            onClick={() => setActiveIndex(index)}
          >
            <Image src={item.image} alt={item.name} width={30} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
