import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = [55.58025700121133, 36.726189649844464]; // Замените на ваши координаты

const CardGogle = () => {
  return (
    <MapContainer center={center} zoom={10} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>
          Custom Popup content.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default CardGogle;