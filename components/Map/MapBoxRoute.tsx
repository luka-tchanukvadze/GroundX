"use client";
import { features } from "process";
import React, { useEffect, useState } from "react";
import Map, { Layer, Source } from "react-map-gl";
import type { FeatureCollection } from "geojson";

function MapBoxRoute(props: any) {
  const fuckingCoordinates = [
    [17.946425, 59.215376],
    [17.946552, 59.215363],
    [17.946647, 59.215354],
    [17.946761, 59.21536],
    [17.947041, 59.215425],
    [17.947468, 59.215549],
    [17.947986, 59.215693],
    [17.94855, 59.21585],
    [17.94892, 59.215958],
    [17.949053, 59.215997],
    [17.94945, 59.216118],
    [17.94955, 59.216157],
    [17.949676, 59.216215],
    [17.949805, 59.216284],
    [17.950199, 59.216484],
    [17.950365, 59.21656],
    [17.95072, 59.216672],
    [17.95091, 59.216722],
    [17.951139, 59.216766],
    [17.951383, 59.216797],
    [17.95298, 59.216959],
    [17.953423, 59.217003],
    [17.954213, 59.217076],
    [17.954273, 59.217083],
    [17.954693, 59.217127],
    [17.954745, 59.217133],

    [17.95522, 59.217176],

    [17.95573, 59.217238],

    [17.956174, 59.217301],

    [17.956746, 59.217375],

    [17.956921, 59.217398],

    [17.956946, 59.217381],

    [17.95698, 59.217369],

    [17.957019, 59.217363],

    [17.957059, 59.217362],

    [17.957068, 59.217294],

    [17.957071, 59.217145],

    [17.957216, 59.216925],

    [17.957314, 59.216729],

    [17.957376, 59.216589],

    [17.957375, 59.216441],

    [17.95763, 59.216423],

    [17.957957, 59.216376],

    [17.95813, 59.216343],

    [17.958108, 59.216289],
  ];
  // console.log("ai esaaa koor...", props.coordinates);

  // if (
  //   !props.coordinates ||
  //   !Array.isArray(props.coordinates) ||
  //   props.coordinates.length === 0
  // ) {
  //   console.log("checked");
  //   return <div>Loading coordinates...</div>; // or return null or another loading state/message
  // } else console.log("skipped");
  const [allCoordinates, setAllCoordinates] = useState([]); // Assuming coordinates are fetched asynchronously

  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   // Fetch coordinates and update state
  //   const fetchCoordinates = async () => {
  //     const fetchedCoordinates = await ;
  //     setAllCoordinates(fetchedCoordinates);
  //     setIsLoading(false);
  //   };

  //   fetchCoordinates();
  // }, []);
  // const geojson: FeatureCollection = {
  //   type: "FeatureCollection",
  //   features: allCoordinates.map((coordinate: any, index: number) => ({
  //     // features: props.coordinates.map((coordinate: any, index: number) => ({
  //     type: "Feature",
  //     geometry: { type: "Point", coordinates: coordinate },
  //     properties: {
  //       id: index,
  //       name: `Point ${index + 1}`,
  //     },
  //   })),
  // };

  // const allCoordinates = [17.946425, 59.215376];

  const geojson: FeatureCollection = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: props.coordinates,
          // coordinates: [
          //   [17.946425, 59.215376],
          //   [17.946552, 59.215363],
          //   [17.946647, 59.215354],
          // ],
        },
        properties: {},
      },
    ],
  };

  return (
    <>
      {/* <Source id="my-data" type="geojson" data={geojson}>
        <Layer
          id="LineString"
          type="line"
          layout={{ "line-join": "round", "line-cap": "square" }}
          paint={{ "line-color": "#0462d4", "line-width": 2 }}
        />
      </Source> */}
      <div>Direction Line Con</div>
    </>
  );
}

export default MapBoxRoute;
