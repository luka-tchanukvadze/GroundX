"use client";

import { DesinationCordiContext } from "@/context/DesinationCordiContext";
import { SourceCordiContext } from "@/context/SourceCordiContet";
import React, { useContext, useEffect, useState } from "react";

const session_token = "65be1bbd501910ec3407160b";
const MAPBOX_RETRIVE_URL =
  "https://api.mapbox.com/search/searchbox/v1/retrieve/";
function AutocompleteAddress() {
  const [source, setSource] = useState<any>();
  const [sourceChange, setSourceChange] = useState<any>(false);
  const [destinationChange, setDestinationChange] = useState<any>(false);

  const { soruceCordinates, setSourceCordinates } =
    useContext(SourceCordiContext);
  const { destinationCordinates, setDestinationCordinates } = useContext(
    DesinationCordiContext
  );

  const [addressList, setAddressList] = useState<any>([]);
  const [destination, setDistination] = useState<any>();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getAddressList();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [source, destination]);

  const getAddressList = async () => {
    setAddressList([]);
    const query = sourceChange ? source : destination;
    const res = await fetch("/api/search-address?q=" + query, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    setAddressList(result);
  };

  const onSourceAddressClick = async (item: any) => {
    setSource(item.full_address);
    setAddressList([]);
    setSourceChange(false);
    const res = await fetch(
      MAPBOX_RETRIVE_URL +
        item.mapbox_id +
        "?session_token=" +
        session_token +
        "&access_token=" +
        process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
    );

    const result = await res.json();

    setSourceCordinates({
      lng: result.features[0].geometry.coordinates[0],
      lat: result.features[0].geometry.coordinates[1],
    });
    // console.log(result);
  };

  const onDestinationAddressClick = async (item: any) => {
    setDistination(item.full_address);
    setAddressList([]);
    setDestinationChange(false);
    const res = await fetch(
      MAPBOX_RETRIVE_URL +
        item.mapbox_id +
        "?session_token=" +
        session_token +
        "&access_token=" +
        process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
    );

    const result = await res.json();

    setDestinationCordinates({
      lng: result.features[0].geometry.coordinates[0],
      lat: result.features[0].geometry.coordinates[1],
    });
    // console.log(result);
  };

  return (
    <div className="">
      <div className="relative">
        {/* <label className="text-gray-400 text-[13px] dark:text-gray-400">
          Where From?
        </label> */}
        <input
          type="text"
          placeholder="Choose start location"
          className={`dark:text-black w-full dark:bg-gray-300 dark:border-gray-800 dark:placeholder-gray-700 dark:focus:border-blue-800 text-xl p-2 border-2 rounded-lg outline-none focus:border-blue-100 mb-2 
          }`}
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
            setSourceChange(true);
          }}
        />

        {addressList?.suggestions && sourceChange ? (
          <div
            className="shadow-md p-1 rounded-md
            absolute w-full bg-white z-20 dark:bg-gray-900 dark:text-blue-300"
          >
            {addressList?.suggestions.map((item: any, index: number) => (
              <h2
                key={index}
                className="p-3 hover:bg-gray-100
                cursor-pointer dark:hover:bg-gray-700"
                onClick={() => {
                  onSourceAddressClick(item);
                }}
              >
                {item.full_address}
              </h2>
            ))}
          </div>
        ) : null}
      </div>
      <div className="relative">
        {/* <label className="text-gray-400 text-[13px] dark:text-gray-400">
          Where To?
        </label> */}
        <input
          type="text"
          placeholder="Choose destination"
          className={`dark:text-black w-full dark:bg-gray-300 dark:border-gray-800 dark:placeholder-gray-700 dark:focus:border-blue-800 text-xl p-2 border-2 rounded-lg outline-none focus:border-blue-100 
          }`}
          value={destination}
          onChange={(e) => {
            setDistination(e.target.value);
            setDestinationChange(true);
          }}
          disabled={!source}
        />

        {addressList?.suggestions && destinationChange ? (
          <div
            className="shadow-md p-1 rounded-md
          absolute w-full bg-white z-20 dark:bg-gray-900 dark:text-blue-300 "
          >
            {addressList?.suggestions.map((item: any, index: number) => (
              <h2
                key={index}
                className="p-3 hover:bg-gray-100
                cursor-pointer dark:hover:bg-gray-700"
                onClick={() => {
                  onDestinationAddressClick(item);
                }}
              >
                {item.full_address}
              </h2>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default AutocompleteAddress;
