// App.js
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapComponent from "./components/MapComponent";
import LocationList from "./components/LocationList";
import L from "leaflet";

export default function App() {
  const [location, setLocation] = useState(null);
  const [locations, setLocations] = useState([]);

  const customIcon = L.icon({
    iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

  function ChangeView({ center }) {
    const map = useMap();
    map.flyTo(center);
    return null;
  }

  const addLocation = (name, description) => {
    if (location) {
      const newLocations = [...locations, { ...location, name, description }];
      setLocations(newLocations);
    }
  };

  const initialLocation = { lat: 51.505, lng: -0.09 };

  return (
    <div>
      <MapContainer
        center={location || initialLocation}
        zoom={13}
        style={{ height: "90vh", width: "100%" }}
      >
        <ChangeView center={location || initialLocation} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapComponent setLocation={setLocation} />
        {location && (
          <Marker position={location} icon={customIcon}>
            <Popup>
              <h2>{location.name}</h2>
              <p>{location.description}</p>
            </Popup>
          </Marker>
        )}
        {locations.map((location, index) => (
          <Marker key={index} position={location} icon={customIcon}>
            <Popup>
              <h2>{location.name}</h2>
              <p>{location.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <button
        onClick={() => addLocation("Location Name", "Location Description")}
        disabled={!location}
        style={{
          backgroundColor: location
            ? "#4CAF50"
            : "#888" /* Green when location is selected, otherwise gray */,
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          margin: "4px 2px",
          cursor: "pointer",
          borderRadius: "12px",
        }}
      >
        ADD
      </button>
      <LocationList
        locations={locations}
        setLocations={setLocations}
        setLocation={setLocation}
      />
    </div>
  );
}
