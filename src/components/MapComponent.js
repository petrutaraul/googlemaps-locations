import React, { useState } from "react";
import { useMapEvents, useMap } from "react-leaflet";
import axios from "axios";

function MapComponent({ setLocation }) {
  const [search, setSearch] = useState("");
  const map = useMap();

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

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search?format=json&q=${search}`
    );

    if (response.data[0]) {
      const { lat, lon, display_name } = response.data[0];
      const newLocationData = {
        city: display_name,
        country: display_name,
        name: display_name,
      };

      setLocation({ latlng: { lat, lng: lon }, ...newLocationData });
      map.flyTo([lat, lon], 14);
    }
  };

  return (
    <form onSubmit={handleSearch} className="fixed z-[9999]  top-0">
      <input
        type="text"
        value={search}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search location"
        className="w-64 px-3 py-2 mr-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      />
      <button
        type="submit"
        className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      >
        Search
      </button>
    </form>
  );
}

export default MapComponent;
