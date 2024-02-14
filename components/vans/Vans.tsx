"use client";
import React, { useEffect } from "react";
import VansList from "@/data/VansList";
import { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import VanDetails from "./VanDetails";
import CustomButton from "../rent-a-car/CustomButton";

interface myVans {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}

const Vans = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [vansData, setVansData] = useState<myVans[]>();

  const [vanIsOpen, setVanIsOpen] = useState(false);

  useEffect(() => {
    setVansData(VansList);
  }, []);

  const typeFilter = searchParams.get("type");

  const displayVans = typeFilter
    ? vansData?.filter((vans) => vans.type.toLowerCase() === typeFilter)
    : vansData;

  const updateSearchParams = (type: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (type.toLowerCase()) {
      searchParams.set("type", type.toLowerCase());
    } else {
      searchParams.delete("type");
    }

    if (type.toLowerCase() === ".") {
      searchParams.delete("type");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  const [selectedVan, setSelectedVan] = useState<myVans | undefined>(
    VansList[0]
  );

  const handleViewMoreClick = (van: myVans) => {
    setVanIsOpen(true);
    setSelectedVan(van);
  };

  return (
    <div className="">
      <div className="flex gap-2">
        <button onClick={() => updateSearchParams("simple")}>simple</button>
        <button onClick={() => updateSearchParams("rugged")}>rugged</button>
        <button onClick={() => updateSearchParams("luxury")}>luxury</button>
        {typeFilter ? (
          <button onClick={() => updateSearchParams(".")}>Clear filter</button>
        ) : null}
      </div>
      <div className=" grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14 ">
        {displayVans?.map((van) => (
          <div
            // className="relative flex p-4 bg-blue-200  hover:bg-white hover:shadow-md rounded-3xl group"
            className="relative flex flex-col  p-6  content-center justify-center items-center text-black-100 bg-blue-100 hover:bg-white hover:shadow-md rounded-3xl group "
            key={van.id}
          >
            <div className="flex flex-col justify-center ">
              <div>
                <div className="w-full flex justify-between items-start gap-2">
                  <h2 className="text-[22px] leading-[26px] font-bold capitalize">
                    {van.name}
                  </h2>
                </div>
                <p className="flex mt-6 text-[32px] font-extrabold">
                  <span className="self-start text-[14px] font-semibold">
                    $
                  </span>
                  {van.price}
                  <span className="self-end text-[14px] font-medium">/day</span>
                </p>
              </div>
              <div>
                <Image
                  src={van.imageUrl}
                  alt="vans photo"
                  // fill
                  // priority
                  width={5000}
                  height={5000}
                  className="w-[300px] h-[300px] object-cover"
                />
              </div>

              <div className="flex group-hover:invisible w-full justify-center text-gray-800 font-extrabold">
                <p className="pt-8 text-[20px]">{van.type}</p>
              </div>

              <div className="hidden justify-start group-hover:flex absolute start-0 bottom-0 end-0 pb-4 mx-4  z-10">
                <CustomButton
                  title="View More vans"
                  containerStyles="w-full py-[16px]
          rounded-full bg-blue-600"
                  textStyles="text-white text-[14px] leading-[17px]"
                  rightIcon="/right-arrow.svg"
                  handleClick={() => {
                    handleViewMoreClick(van);
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <VanDetails
        vanIsOpen={vanIsOpen}
        closeModal={() => setVanIsOpen(false)}
        van={selectedVan}
      />
    </div>
  );
};

export default Vans;
