import { useState, useEffect } from "react";

export default function useLocations() {
  const [locations, setLocations] = useState(() => {
    const savedLocations = localStorage.getItem("locations");
    if (savedLocations) {
      return JSON.parse(savedLocations);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("locations", JSON.stringify(locations));
  }, [locations]);

  return [locations, setLocations];
}
