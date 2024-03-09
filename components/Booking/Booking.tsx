"use client";
import React, { useContext, useState } from "react";
import AutocompleteAddress from "./AutocompleteAddress";
import Cars from "./Cars";
// import Cards from "./Cards";
import { MapboxMap } from "react-map-gl";
import Link from "next/link";
import ImportantInfo from "./ImportantInfo";
import { DirectionDataContext } from "@/context/DirectionDataContext";

function Booking() {
  // const screenHeight = window.innerHeight
  const { directionData, setDirectionData } = useContext(DirectionDataContext);
  return (
    <div className=" p-5">
      {/* <h2 className=" text-[20px] font-semibold">Booking</h2> */}
      <h2 className="flex justify-center text-[20px] font-semibold">Booking</h2>

      <div className="shadow-2xl p-5 rounded-md ">
        <ImportantInfo />
        <AutocompleteAddress />
        {directionData.routes && <Cars />}
        {/* <Cards /> */}
        <Link href="/reviews">
          <button className="w-full py-3 bg-blue-600 text-white rounded-full mt-8">
            Leave a Review
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Booking;
