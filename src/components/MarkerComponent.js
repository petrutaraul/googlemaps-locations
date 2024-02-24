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

export default function MarkerComponent({ location }) {
  return (
    <Marker position={location.latlng} icon={customIcon}>
      <Popup>
        <h2>Name: {location.name}</h2>
        <p>City: {location.city}</p>
        <p>Country: {location.country} </p>
      </Popup>
    </Marker>
  );
}
