"use client";

import CarsList from "@/data/CarsList";
import React, { useState, useContext } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { DirectionDataContext } from "@/context/DirectionDataContext";
import { CostContext } from "@/context/CostContext";
import Link from "next/link";

function Cars() {
  const [selectedCAr, setSelectedCar] = useState<any>();
  const { directionData, setDirectionData } = useContext(DirectionDataContext);

  const { price, setPrice } = useContext(CostContext);
  console.log(price);

  const getPrice = (num: any) => {
    setPrice(getCost(num));
  };

  const getCost = (charges: any) => {
    return (
      charges *
      directionData.routes[0].distance *
      0.000621371192
    ).toFixed(2);
  };
  return (
    <div className="mt-8">
      <h2 className="font-semibold"> Select Car</h2>
      {/* <div className="grid grid-cols-3  md:grid-cols-3  "> */}
      <div className="grid align-center justify-center grid-cols-3 md:grid-cols-2 lg:grid-cols-3  ">
        {CarsList.map((item, index) => (
          <div
            key={index}
            className={`m-2 p-2 border-2 rounded-md hover:border-cyan-100 ${
              index === selectedCAr ? "border-4 border-cyan-100" : null
            }`}
            onClick={() => (setSelectedCar(index), getPrice(item.charges))}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={75}
              height={90}
              className="w-full"
            />
            <h2 className="text-[12px]">{item.name}</h2>

            {directionData.routes ? (
              <span className="text-[12px] float-right">
                {getCost(item.charges)}$
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <Link href="/billing">
        <button className="w-full py-3 bg-yellow-400 text-white rounded-full mt-8">
          Book For {price && `${price}$`}
        </button>
      </Link>
    </div>
  );
}

export default Cars;
