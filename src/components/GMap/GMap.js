import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import places from "./places";

const GMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{
        lat: props.coords.lat,
        lng: props.coords.lng
      }}
    >
      {props.isMarkerShown && <Marker position={{ lat: 37, lng: -122 }} />}
      {console.log("props", props)}
    </GoogleMap>
  ))
);

export default GMap;
