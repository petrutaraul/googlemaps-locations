import React, { useRef } from "react";
import { classNames } from "../utils/classNames";

function LocationList({ locations, setLocations, setLocation }) {
  const fileInputRef = useRef(null);

  const exportLocations = () => {
    const dataStr = JSON.stringify(locations);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    let exportFileDefaultName = "locations.json";
    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  const importLocations = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const newLocations = JSON.parse(event.target.result);
      setLocations(newLocations);
    };
    reader.readAsText(file);
  };

  return (
    <ol className="flex flex-col gap-4">
      {locations.length > 0 && (
        <button
          onClick={exportLocations}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Export Locations
        </button>
      )}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={importLocations}
      />
      <button
        onClick={() => fileInputRef.current.click()}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Import Locations
      </button>

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
