import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import VenueLocationIcon from './VenueLocationIcon';
import "leaflet/dist/leaflet.css";



const  Mymap = ({lat,lng}) => {
  //const position = [Object.values(lat),Object.values(lng)]
  const position =[lat, lng]
    return(
      <div className="" style={{position: 'relative'}}>

        <div className="mapcontainer">
      
          <MapContainer center = {position} zoom={13} >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
                <Marker position={position} icon={VenueLocationIcon}>
                  <Popup>
                   <p>latitude:{lat}</p>
                   <p>longtitude:{lng}</p>
                  </Popup>
                </Marker>
          </MapContainer>
        </div>
    </div>   
);}

export default Mymap;
