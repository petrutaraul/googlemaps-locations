import { MapContainer, TileLayer } from "react-leaflet";
import ChangeView from "./ChangeView";
import MapComponent from "./MapComponent";
import MarkerComponent from "./MarkerComponent";

export default function MapContainerComponent({
  location,
  setLocation,
  locations,
}) {
  return (
    <MapContainer
      center={location.latlng}
      zoom={13}
      className="h-[calc(100vh-40px)] w-full top-10"
    >
      <ChangeView center={location.latlng} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapComponent setLocation={setLocation} />
      {location.name && location.city && (
        <MarkerComponent location={location} />
      )}
      {locations.map((location, index) => (
        <MarkerComponent key={index} location={location} />
      ))}
    </MapContainer>
  );
}
