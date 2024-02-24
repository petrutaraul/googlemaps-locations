// MapComponent.js
import React from "react";
import { useMapEvents } from "react-leaflet";

function MapComponent({ setLocation }) {
  const map = useMapEvents({
    click: (e) => {
      setLocation(e.latlng);
    },
  });

  return null;
}

export default MapComponent;
