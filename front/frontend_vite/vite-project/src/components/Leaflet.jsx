
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';


const escuelaIcon = new L.Icon({
  iconUrl: '/escuela.svg',
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const estudianteIcon = new L.Icon({
  iconUrl: '/estudiante.svg',
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


export default function Leaflet({
  escuelas = [],
  estudiantes = [],
  centro = { lat: 13.9942, lng: -89.5597 },
  zoom = 13 }) {
  return (
    <>
    <MapContainer
      center={[centro.lat, centro.lng]}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{
        height: '500px',
        width: '100%',
        borderRadius: '10px'
      }}
    >
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {escuelas.map((escuela) => (
        <Marker
          key={`escuela-${escuela.id_school}`}
          position={[
            escuela.latitud,
            escuela.longitud
          ]}
          icon={escuelaIcon}>
          <Popup>
            <strong>{escuela.nombre}</strong>
            <br />
            {escuela.direccion} <br />
            {escuela.email}
          </Popup>
        </Marker>
      ))}


      {estudiantes.map((estudiante) => (
        <Marker
          key={`estudiante-${estudiante.id_alumno}`}
          position={[
            estudiante.latitud,
            estudiante.longitud
          ]}
          icon={estudianteIcon}
        >
          <Popup>
            <strong>{estudiante.nombre_completo}</strong>
            <br />
            Estudiante
          </Popup>
        </Marker>
      ))}

    </MapContainer>
    </>
  );
}
