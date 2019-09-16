import React, { useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import places from "./places";

const GMap = withScriptjs(
  withGoogleMap(props => {
    const [clickCoord, setClickCoord] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = event => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setClickCoord({ lat, lng });
    };

    const onToggleOpen = () => {
      setIsOpen(!isOpen);
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
        {props.isMarkerShown && (
          <Marker
            position={{ lat: parseFloat(clickCoord.lat), lng: parseFloat(clickCoord.lng) }}
            onClick={onToggleOpen}
          >
            {isOpen && (
              <InfoWindow onCloseClick={onToggleOpen}>
                <div>
                  <p>THIS IS AN INFO WINDOW!!!</p>
                  <p>HELLO</p>
                  <h1>welcome</h1>
                  <h2>test</h2>
                </div>
              </InfoWindow>
            )}
          </Marker>
        )}
      </GoogleMap>
    );
  })
);

export default GMap;
