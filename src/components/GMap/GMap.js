import React, {useEffect, useState} from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const GMap = withScriptjs(withGoogleMap((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: props.coords.latitude, lng: props.coords.longitude }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      )}
      {console.log(props.coords)}
    </GoogleMap>
  ))
);

export default GMap;

{
  /* <MyMapComponent isMarkerShown />// Map with a Marker
<MyMapComponent isMarkerShown={false} />// Just only Map */
}
