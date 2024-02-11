"use client ";

import CarCard from "@/components/rent-a-car/CarCard";
import CustomFilter from "@/components/rent-a-car/CustomFilter";
import Hero from "@/components/rent-a-car/Hero";
import SearchBar from "@/components/rent-a-car/SearchBar";
import ShowMore from "@/components/rent-a-car/ShowMore";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import { Arya } from "next/font/google";
import React from "react";

// async function RentCar({ searchParams }: HomeProps) {
async function RentCar() {
  // const allCars = await fetchCars({
  //   manufacturer: searchParams.manufacturer,
  //   year: searchParams.year || 2022,
  //   fuel: searchParams.fuel || "",
  //   limit: searchParams.limit || 10,
  //   model: searchParams.model || "",
  // });

  const [allCars, setAllCars];

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main style={{ height: "200rem" }} className="overflow-hidden">
      <Hero />
      <div className="mt-12 px-10 py-10" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car CAtalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="flex mt-12 w-full justify-between items-center flex-wrap gap-5">
          <SearchBar />

          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="text-black text-xl font-bold">oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default RentCar;
