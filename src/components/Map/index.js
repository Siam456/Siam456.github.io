import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MdLocationPin } from "react-icons/md";

export default function index() {
  return (
    <>
      <MapContainer
        center={[23.776874, 90.426588]}
        zoom={15}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "50vh" }}
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[23.776874, 90.426588]}>
          <Popup>Hello!!</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
