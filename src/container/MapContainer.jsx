import React from 'react'
import GoogleMapReact from 'google-map-react';
const mapStyles = {
    width: '100%',
    height: '100%',
};
const center = {
    lat:59.95,
    lng:30.33
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const MapContainer = ({ props }) => {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCXvcXJamTWOhGyk6G3c_clQdj-2JPBALo' }}
            defaultCenter={center}
            style={mapStyles}
        >
            <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
            />
        </GoogleMapReact>
        
        </div>
    )
}

export default MapContainer



