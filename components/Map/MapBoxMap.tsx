"use client";

import React, { useEffect, useRef } from "react";
import Map, { Marker } from "react-map-gl";
import { useContext } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";
import "mapbox-gl/dist/mapbox-gl.css";
import { useUser } from "@clerk/nextjs";
import Markers from "./Markers";
import { SourceCordiContext } from "@/context/SourceCordiContet";
import { DesinationCordiContext } from "@/context/DesinationCordiContext";
import { DirectionDataContext } from "@/context/DirectionDataContext";
import MapBoxRoute from "./MapBoxRoute";
import DistanceTime from "../Booking/DistanceTime";

const MAPBOX_DRIVING_ENDPOINT =
  "https://api.mapbox.com/directions/v5/mapbox/driving/";

function MapBoxMap() {
  const mapRef = useRef<any>();

  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const { sorceCordinates, setSourceCordinates } =
    useContext(SourceCordiContext);
  const { destinationCordinates, setDestinationCordinates } = useContext(
    DesinationCordiContext
  );

  const { directionData, setDirectionData } = useContext(DirectionDataContext);

  useEffect(() => {
    if (sorceCordinates) {
      mapRef.current?.flyTo({
        center: [sorceCordinates.lng, sorceCordinates.lat],
        duration: 2500,
      });
    }
  }, [sorceCordinates]);

  useEffect(() => {
    if (destinationCordinates) {
      mapRef.current?.flyTo({
        center: [destinationCordinates.lng, destinationCordinates.lat],
        duration: 2500,
      });
    }

    if (sorceCordinates && destinationCordinates) {
      {
        getDirectionRoute();
      }
    }
  }, [destinationCordinates]);

  const getDirectionRoute = async () => {
    const res = await fetch(
      MAPBOX_DRIVING_ENDPOINT +
        sorceCordinates.lng +
        "," +
        sorceCordinates.lat +
        ";" +
        destinationCordinates.lng +
        "," +
        destinationCordinates.lat +
        "?overview=full&geometries=geojson" +
        "&access_token=" +
        process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await res.json();
    console.log("jer directiondata dawere");
    console.log(result);
    setDirectionData(result);
  };
  console.log(directionData.routes);

  return (
    <div className="p-5 relative">
      <h2 className="text-[20px] font-semibold">Map</h2>
      <div className="rounded-lg overflow-hidden">
        {userLocation ? (
          <Map
            ref={mapRef}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            initialViewState={{
              longitude: userLocation?.lng,
              latitude: userLocation?.lat,
              zoom: 14,
            }}
            style={{ width: "100%", height: 700 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Markers />
          </Map>
        ) : null}
      </div>
      {directionData?.routes ? (
        <MapBoxRoute
          coordinates={directionData?.routes[0]?.geometry?.coordinates}
        />
      ) : (
        <div>aeeee</div>
      )}
      <div className="absolute bottom-6 z-20 right-20 hidden md:block">
        <DistanceTime />
      </div>
    </div>
  );
}

export default MapBoxMap;
