"use client";
import React from "react";
import { useState } from "react";
import ByCash from "./ByCash";
import ByCard from "./ByCard";
import Image from "next/image";

function Payment() {
  const [selected, setSelected] = useState<boolean>(true);

  const handleClick = () => {
    setSelected((prev) => !prev);
  };

  return (
    <div className="flex flex-col justify-center items-center sm:w-1/3 bg-blue-700 mt-8 p-4 w-full mx-6">
      <div className="flex gap-2 justify-center mb-8">
        <div onClick={handleClick} className="flex flex-col border-2 px-3 py-2">
          <Image src="/card.png" width={25} height={25} alt="card" />
          <p>By Card</p>
        </div>
        <div onClick={handleClick} className="flex flex-col border-2 px-3 py-2">
          <Image src="/cash.png" width={25} height={25} alt="cash" />
          <p>By Cash</p>
        </div>
      </div>

      <div>{selected ? <ByCard /> : <ByCash />}</div>
    </div>
  );
}

export default Payment;
