"use client";

import Booking from "@/components/Booking/Booking";
import MapBoxMap from "@/components/Map/MapBoxMap";
import { DesinationCordiContext } from "@/context/DesinationCordiContext";
import { SourceCordiContext } from "@/context/SourceCordiContet";
import { UserLocationContext } from "@/context/UserLocationContext";
import { DirectionDataContext } from "@/context/DirectionDataContext";
import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTop";

// Visättravägen 71, 141 50 Huddinge Municipality, Sweden
// Visättra Backe 71, 141 58 Huddinge Municipality, Sweden

//155 Kallie Loop
//525 N tryon Street

// const Button = styled.button`
//   background: none;
//   border: none;
//   transform: ${(props) => props.theme.dark && "rotate(360deg)"};
//   transition: all 0.5s;
// `;

export default function Home() {
  const [userLocation, setUserLocation] = useState<any>();
  const [sorceCordinates, setSourceCordinates] = useState<any>([]);
  const [destinationCordinates, setDestinationCordinates] = useState<any>([]);
  const [directionData, setDirectionData] = useState<any>([]);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) =>
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      })
    );
  };

  return (
    <div>
      <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
        <SourceCordiContext.Provider
          value={{ sorceCordinates, setSourceCordinates }}
        >
          <DesinationCordiContext.Provider
            value={{ destinationCordinates, setDestinationCordinates }}
          >
            <DirectionDataContext.Provider
              value={{ directionData, setDirectionData }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="">
                  <Booking />
                </div>

                <div className="col-span-2">
                  <MapBoxMap />
                </div>
              </div>
            </DirectionDataContext.Provider>
          </DesinationCordiContext.Provider>
        </SourceCordiContext.Provider>
      </UserLocationContext.Provider>
    </div>
  );
}
