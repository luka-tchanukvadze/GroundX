"use client";
import React, { useState } from "react";
import AutocompleteAddress from "./AutocompleteAddress";
import Cars from "./Cars";
import Cards from "./Cards";
import { MapboxMap } from "react-map-gl";
import Link from "next/link";
import ImportantInfo from "./ImportantInfo";

function Booking() {
  // const screenHeight = window.innerHeight

  return (
    <div className=" p-5">
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div className="border-2 p-5 rounded-md ">
        <ImportantInfo />
        <AutocompleteAddress />
        <Cars />
        <Cards />
        <button className="w-full py-3 bg-yellow-400 text-white rounded-full mt-8">
          <Link href="/billing">Book</Link>
        </button>
        <button className="w-full py-3 bg-blue-600 text-white rounded-full mt-8">
          <Link href="/reviews">Leave a Review</Link>
        </button>
      </div>
    </div>
  );
}

export default Booking;
