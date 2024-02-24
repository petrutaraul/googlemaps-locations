import React from "react";
import { classNames } from "../utils/classNames";

function LocationList({ locations, setLocations, setLocation }) {
  return (
    <ol className="flex flex-col gap-4">
      <h1 className="font-bold text-4xl">Saved Locations: </h1>
      {locations.map((location, index) => (
        <li
          key={index}
          className={classNames(
            index % 2 === 0 ? "bg-neutral-100" : "bg-neutral-200",
            "p-4 rounded-md"
          )}
        >
          <span>
            <h2>
              <span className="font-bold">Name:</span> {location.name}
            </h2>
            <p>
              <span className="font-bold">City:</span> {location.city}
            </p>
            <p>
              <span className="font-bold">Country:</span> {location.country}{" "}
            </p>
          </span>
          <button
            onClick={() => setLocation(location)}
            className="bg-green-600 text-white px-2 py-1 rounded-md"
          >
            Revisit
          </button>
          <button
            onClick={() => {
              const newLocations = [...locations];
              newLocations.splice(index, 1);
              setLocations(newLocations);
            }}
            className="bg-red-600 text-white px-2 py-1 rounded-md ml-2"
          >
            Remove
          </button>
        </li>
      ))}
    </ol>
  );
}

export default LocationList;
