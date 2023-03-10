import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
const Map = () =>{
    const position: [number, number] = [23.74328865879914, 90.41283642189588];
    return (
        <div style={{width:'100%',height:'600px'}}>
        <MapContainer style={{width
        :'100%',height:'100%'}} center={position} zoom={13} scrollWheelZoom={false}  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
        </div>
    )
}
export default Map