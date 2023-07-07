import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
    const mapContainerStyle = {
        width: '100%',
        height: '400px',
      };
    
      const center = {
        lat: 23.948298027631512, 
        lng: 90.37920632694025, 
      };
    
      const markerPosition = {
        //23.948298027631512, 90.37920632694025
        lat: 23.948298027631512, 
        lng: 90.37920632694025, 
      };
    
      return (
        <LoadScript googleMapsApiKey="AIzaSyCoT021hPfSSB5lZ6wm_EJFM9UQjYcsqOo">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
            <Marker position={markerPosition} />
          </GoogleMap>
        </LoadScript>
      );
}

export default Map
