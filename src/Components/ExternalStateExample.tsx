import {MapContainer,TileLayer,Marker,Popup, useMapEvents, useMap} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import L from "leaflet";
import icon from "./constants";
const center:[number,number] = [51.505, -0.09]
const zoom:number = 15
interface DisplayPositionProps {
    map: any;
  }

const DisplayPosition=({ map }:DisplayPositionProps)=> {

  const [position, setPosition] = useState(() => map.getCenter())

  const onClick = useCallback(() => {
    map.setView(center, zoom)
  }, [map])
 
  

  const onMove = useCallback(() => {
    setPosition(map.getCenter())
  }, [map])

  useEffect(() => {
    map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove])

  return (
    <p>
      latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
      <button onClick={onClick}>reset</button>
    </p>
  )
}
function LocationMarker() {
  const [position, setPosition] = useState<any>(null);
  const [bbox, setBbox] = useState<any>([]);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
      setBbox(e.bounds.toBBoxString().split(","));
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={icon}>
      <Popup>
        You are here. <br />
        Map bbox: <br />
        <b>Southwest lng</b>: {bbox[0]} <br />
        <b>Southwest lat</b>: {bbox[1]} <br />
        <b>Northeast lng</b>: {bbox[2]} <br />
        <b>Northeast lat</b>: {bbox[3]}
      </Popup>
    </Marker>
  );
}


const ExternalStateExample=()=> {
  const [map, setMap] = useState<any>(null)

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={center}
        style={{height:'100%',width:'100%'}}
        zoom={zoom}
        scrollWheelZoom={true}
        ref={setMap}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker></LocationMarker>
      </MapContainer>
    ),
    [],
  )

  return (
    <div style={{width:'40%',height:'600px',marginLeft:'auto'}}>
      {map ? <DisplayPosition map={map} /> : null}
      {displayMap}
    </div>
  )
}
export default ExternalStateExample