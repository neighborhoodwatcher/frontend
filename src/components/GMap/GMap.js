import React, { useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import places from "./places";

const GMap = withScriptjs(
  withGoogleMap(props => {
    const [clickCoord, setClickCoord] = useState({});

    const handleClick = event => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      console.log(lat, lng);
      setClickCoord({ lat, lng });
      console.log(clickCoord)
    };

    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{
          lat: props.coords.lat,
          lng: props.coords.lng
        }}
        onClick={event => handleClick(event)}
      >
        {props.isMarkerShown && <Marker position={{ lat: clickCoord.lat, lng: clickCoord.lng }} />}
        {console.log("props", props)}
      </GoogleMap>
    );
  })
);

export default GMap;
