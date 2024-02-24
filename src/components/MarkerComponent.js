import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
  iconSize: [38, 95],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76],
});

const houseIcon = L.icon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
  // other properties...
});

const roadIcon = L.icon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-red.png",
  // other properties...
});

const defaultIcon = L.icon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-orange.png",
  // other properties...
});

export default function MarkerComponent({ location }) {
  let icon;
  if (location.name.toLowerCase().includes("house")) {
    icon = houseIcon;
  } else if (location.name.toLowerCase().includes("road")) {
    icon = roadIcon;
  } else {
    icon = defaultIcon;
  }

  return (
    <Marker position={location.latlng} icon={icon}>
      <Popup>
        <h2>Name: {location.name}</h2>
        <p>City: {location.city}</p>
        <p>Country: {location.country} </p>
      </Popup>
    </Marker>
  );
}
