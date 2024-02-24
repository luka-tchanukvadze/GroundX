"use client";
import React from "react";
import { useState } from "react";
import ByCash from "./ByCash";
import ByCard from "./ByCard";
import Image from "next/image";

function Payment() {
  const [selected, setSelected] = useState<boolean>(true);

  return (
    <div className="flex flex-col justify-center items-center p-12 shadow-2xl mt-24  mx-6">
      <div className="flex gap-10 justify-center mb-8">
        <div
          onClick={() => setSelected(true)}
          className={`flex flex-col border-2 px-6 py-3 rounded-md ${
            selected ? "border-blue-200 dark:border-blue-800" : ""
          }`}
        >
          <Image src="/card.png" width={25} height={25} alt="card" />
          <p>By Card</p>
        </div>
        <div
          onClick={() => setSelected(false)}
          className={`flex flex-col border-2 px-6 py-3 rounded-md ${
            !selected ? "border-blue-200 dark:border-blue-800" : ""
          }`}
        >
          <Image src="/cash.png" width={25} height={25} alt="cash" />
          <p>By Cash</p>
        </div>
      </div>

      <div>{selected ? <ByCard /> : <ByCash />}</div>
    </div>
  );
}

export default Payment;
