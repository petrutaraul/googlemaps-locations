import React from "react";

function LocationList({ locations, setLocations, setLocation }) {
  return (
    <div>
      {locations.map((location, index) => (
        <div key={index}>
          <span>
            Lat: {location.lat}, Lng: {location.lng}
          </span>
          <button onClick={() => setLocation(location)}>Revisit</button>
          <button
            onClick={() => {
              const newLocations = [...locations];
              newLocations.splice(index, 1);
              setLocations(newLocations);
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default LocationList;
