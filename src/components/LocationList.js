import React from "react";

function LocationList({ locations, setLocations, setLocation }) {
  return (
    <div>
      {locations.map((location, index) => (
        <div key={index}>
          <span>
            <h2>Name: {location.name}</h2>
            <p>City: {location.city}</p>
            <p>Country: {location.country} </p>
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
