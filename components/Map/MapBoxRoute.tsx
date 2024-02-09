import { features } from "process";
import React from "react";
import Map, { Layer, Source } from "react-map-gl";
import type { FeatureCollection } from "geojson";

function MapBoxRoute(props: any) {
  console.log("ai esaaa koor...", props.coordinates);

  const geojson: FeatureCollection = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-122.4, 37.8] },
        properties: [],
      },
    ],
  };
  return (
    <Source type="geojson" data={geojson}>
      <Layer
        type="line"
        layout={{ "line-join": "round", "line-cap": "square" }}
        paint={{ "line-color": "#0462d4", "line-width": 2 }}
      />
    </Source>
    // <div>naxui</div>
  );
}

export default MapBoxRoute;
