"use client";
import { env, features } from "process";
import mapboxgl, { Map } from "mapbox-gl";
import React, { useContext, useEffect, useRef, useState } from "react";
// import Map, { Layer, Source } from "react-map-gl";
import type { FeatureCollection } from "geojson";
import Markers from "./Markers";
import { SourceCordiContext } from "@/context/SourceCordiContet";
import { DesinationCordiContext } from "@/context/DesinationCordiContext";
import { Marker } from "react-map-gl";
import { UserLocationContext } from "@/context/UserLocationContext";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGVsbG8tdGhlcmVlZSIsImEiOiJjbHNydHprZ28xOXc0Mmpwc3k1bTV6MWg1In0.QvabvJclGa-B2a0kfQqixg";

interface MapBoxRouteProps {
  coordinates: any;
}

function MapBoxRoute(props: MapBoxRouteProps) {
  // const fuckingCoordinates = [
  //   [-77.0366048812866, 38.89873175227713],
  //   [-77.03364372253417, 38.89876515143842],
  //   [-77.03364372253417, 38.89549195896866],
  //   [-77.02982425689697, 38.89549195896866],
  //   [-77.02400922775269, 38.89387200688839],
  //   [-77.01519012451172, 38.891416957534204],
  //   [-77.01521158218382, 38.892068305429156],
  //   [-77.00813055038452, 38.892051604275686],
  //   [-77.00832366943358, 38.89143365883688],
  //   [-77.00818419456482, 38.89082405874451],
  //   [-77.00815200805664, 38.88989712255097],
  // ];

  // const [allCoordinates, setAllCoordinates] = useState([]);

  let geojson: FeatureCollection = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: props.coordinates,
          // coordinates: fuckingCoordinates,
        },
      },
    ],
  };

  // const { destinationCordinates, setDestinationCordinates } = useContext(
  //   DesinationCordiContext
  // );
  // console.log("sorceCordinates", sorceCordinates);

  const { sorceCordinates, setSourceCordinates } =
    useContext(SourceCordiContext);
  console.log("sorceCordinates", sorceCordinates);

  const { destinationCordinates, setDestinationCordinates } = useContext(
    DesinationCordiContext
  );
  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const [map, setMap] = useState<Map | null>(null);
  const mapContainerRef = useRef<HTMLElement | string>("");
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [1, 1],
      zoom: 1.5,
    });

    if (userLocation) {
      map.flyTo({
        center: [userLocation?.lng, userLocation?.lat],
        duration: 0,
        zoom: 14,
      });
    }
    map.on("load", () => {
      // map.setPaintProperty("countries", "fill-color", "#F00");
      setMap(map);
    });

    // Clean up on unmount
    return () => map.remove();
  }, []);

  useEffect(() => {
    if (!map) {
      console.log("fuck");
      return;
    }

    const coord = props.coordinates;
    new mapboxgl.Marker()
      .setLngLat([sorceCordinates?.lng, sorceCordinates?.lat])
      .addTo(map);
    new mapboxgl.Marker()
      .setLngLat([destinationCordinates?.lng, destinationCordinates?.lat])
      .addTo(map);
    // new mapboxgl.Marker().setLngLat(coord[0]).addTo(map);
    // new mapboxgl.Marker().setLngLat(coord.at(-1)).addTo(map);

    // map.flyTo({
    //   center: [sorceCordinates?.lng, sorceCordinates?.lat],
    //   duration: 2500,
    //   zoom: 14,
    // });

    // console.log("soruce", sorceCordinates);

    map.flyTo({
      center: [destinationCordinates?.lng, destinationCordinates?.lat],
      duration: 2500,
      zoom: 14,
    });
    // map.flyTo({
    //   center: coord[0],
    //   duration: 2500,
    //   zoom: 14,
    // });

    geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: coord,
          },
        },
      ],
    };
    map.addSource("countries", {
      type: "geojson",
      data: geojson,
    });

    map.setLayoutProperty("country-label", "text-field", [
      "format",
      ["get", "name_en"],
      { "font-scale": 1.2 },
      "\n",
      {},
      ["get", "name"],
      {
        "font-scale": 0.8,
        "text-font": [
          "literal",
          ["DIN Offc Pro Italic", "Arial Unicode MS Regular"],
        ],
      },
    ]);

    map.addLayer({
      id: "countries",
      type: "line",
      source: "countries",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#FF0000", // Red color for the route
        "line-width": 2,
      },
    });
    // map.setPaintProperty("countries", "fill-color", "#F00");
  }, [props.coordinates]);

  useEffect(() => {
    if (!map) return;

    new mapboxgl.Marker()
      .setLngLat([sorceCordinates?.lng, sorceCordinates?.lat])
      .addTo(map);
    map.flyTo({
      center: [sorceCordinates?.lng, sorceCordinates?.lat],
      duration: 2500,
      zoom: 14,
    });
  }, [sorceCordinates]);

  return (
    <>
      <div>
        <div
          style={{ height: "500px" }}
          id="asd"
          ref={mapContainerRef as any}
          className="map-container"
        >
          {/* <Marker longitude={23.27865} latitude={-25.68822} anchor="bottom">
            <img src="./location.png" className="w-10 h-10" />
          </Marker> */}
        </div>
      </div>
      {/* <div>Direction Line Con</div> */}
    </>
  );
}

export default MapBoxRoute;
