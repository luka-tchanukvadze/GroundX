import Slider from "@/components/Slider/Slider";
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

async function RentCar({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    // <div className="mt-32 2xl:mx-44 xl:mx-32 md:mx-16"></div>
    <main
      style={{ height: "100%" }}
      className="overflow-hidden flex flex-col items-center  2xl:mx-44 xl:mx-32 md:mx-16"
    >
      <Hero />

      <div className="w-[80%] my-16">
        <Slider />
      </div>

      <div className="mt-12 px-10 py-10" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
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
            <div className=" grid  xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14 ">
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
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default RentCar;
