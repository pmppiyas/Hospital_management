"use client"; // For Next.js client-side rendering

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Location() {
  const containerStyle = {
    width: "100%",
    height: "500px",
  };

  const center = {
    lat: 23.8103,
    lng: 90.4125,
  };

  return (
    <div className="border-2 flex flex-col justify-center items-center w-full h-full">
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Location;
