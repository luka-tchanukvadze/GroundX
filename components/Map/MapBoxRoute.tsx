import { features } from "process";
import React from "react";
import Map, { Layer, Source } from "react-map-gl";
import type { FeatureCollection } from "geojson";

function MapBoxRoute(props: any) {
  console.log("ai esaaa koor...", props.coordinates);

  // const geojson: FeatureCollection = {
  //   type: "FeatureCollection",
  //   features: [
  //     {
  //       type: "Feature",
  //       geometry: { type: "Point", coordinates: [-122.4, 37.8] },
  //       properties: [],
  //     },
  //   ],
  // };

  return (
    // <Source type="geojson" data={geojson}>
    //   <Laye
    //     type="line"
    //     layout={{ "line-join": "round", "line-cap": "square" }}
    //     paint={{ "line-color": "#0462d4", "line-width": 2 }}
    //   />
    // </Source>
    <div>naxui</div>
  );
}

export default MapBoxRoute;

// import React from "react";
// import { Layer, Source } from "react-map-gl";
// function MapBoxRoute(props: any) {
//   return (
//     <Source
//       type="geojson"
//       data={{
//         type: "Feature",
//         geometry: { type: "LineString", coordinates: props.coordinates },
//         properties: [props.coorinates[0]],
//       }}
//     >
//       <Layer
//         type="line"
//         layout={{ "line-join": "round", "line-cap": "square" }}
//         paint={{ "line-color": "#0462d4", "line-width": 4 }}
//       />
//     </Source>
//   );
// }

// export default MapBoxRoute;
