import React from "react";
import { useMapEvents } from "react-leaflet";
import axios from "axios";

function MapComponent({ setLocation }) {
  useMapEvents({
    click: async (e) => {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${e.latlng.lat}&lon=${e.latlng.lng}`
      );

      const newLocationData = {
        city: response.data.address.city,
        country: response.data.address.country,
        name: response.data.name,
      };

      setLocation({ latlng: e.latlng, ...newLocationData });
    },
  });
}

export default MapComponent;
