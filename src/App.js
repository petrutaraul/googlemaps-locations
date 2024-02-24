import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import LocationList from "./components/LocationList";
import MapContainerComponent from "./components/MapContainerComponent";
import AddLocationButton from "./components/AddLocationButton";
import useLocations from "./hooks/useLocations";

export default function App() {
  const [location, setLocation] = useState({
    latlng: { lat: 51.505, lng: -0.09 },
    city: "",
    country: "",
    name: "",
    description: "",
  });

  const [locations, setLocations] = useLocations();

  const addLocation = () => {
    if (location) {
      const newLocations = [...locations, { ...location }];
      setLocations(newLocations);
    }
  };

  useEffect(() => {
    if (locations.length > 0) {
      setLocation(locations[0]);
    }
  }, []);

  return (
    <div>
      <MapContainerComponent
        location={location}
        setLocation={setLocation}
        locations={locations}
      />
      <AddLocationButton location={location} addLocation={addLocation} />
      <LocationList
        locations={locations}
        setLocations={setLocations}
        setLocation={setLocation}
      />
    </div>
  );
}
