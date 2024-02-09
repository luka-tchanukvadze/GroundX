import React from "react";
import { useContext } from "react";
import { Marker } from "react-map-gl";
import { UserLocationContext } from "@/context/UserLocationContext";
import { SourceCordiContext } from "@/context/SourceCordiContet";
import { DesinationCordiContext } from "@/context/DesinationCordiContext";

function Markers() {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const { sorceCordinates, setSourceCordinates } =
    useContext(SourceCordiContext);
  const { destinationCordinates, setDestinationCordinates } = useContext(
    DesinationCordiContext
  );

  return (
    <div>
      {/* <Marker
        longitude={userLocation?.lng}
        latitude={userLocation?.lat}
        anchor="bottom"
      >
        <img className="w-10 h-10" src="./pin.png" />
      </Marker>

      {sorceCordinates.length != 0 ? (
        <Marker
          longitude={sorceCordinates?.lng}
          latitude={sorceCordinates?.lat}
          anchor="bottom"
        >
          <img className="w-10 h-10" src="./pin.png" />
        </Marker>
      ) : null}

      {destinationCordinates.length != 0 ? (
        <Marker
          longitude={destinationCordinates?.lng}
          latitude={destinationCordinates?.lat}
          anchor="bottom"
        >
          <img className="w-10 h-10" src="./pin.png" />
        </Marker>
      ) : null} */}

      {sorceCordinates.length != 0 ? (
        <Marker
          longitude={sorceCordinates?.lng}
          latitude={sorceCordinates?.lat}
          anchor="bottom"
        >
          <img src="./location.png" className="w-10 h-10" />
        </Marker>
      ) : null}

      {/* Destination Marker  */}

      {destinationCordinates.length != 0 ? (
        <Marker
          longitude={destinationCordinates?.lng}
          latitude={destinationCordinates?.lat}
          anchor="bottom"
        >
          <img src="./location.png" className="w-10 h-10" />
        </Marker>
      ) : null}
    </div>
  );
}

export default Markers;
