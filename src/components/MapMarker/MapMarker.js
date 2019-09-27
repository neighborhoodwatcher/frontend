import React, { useState } from "react";
import { Marker, InfoWindow } from "react-google-maps";

import CreateMarker from "../CreateMarker/CreateMarker";

const MapMarker = props => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMarkerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Marker
      position={{
        lat: props.latitude,
        lng: props.longitude
      }}
      onClick={handleMarkerClick}
    >
      {isOpen && (
        <InfoWindow onCloseClick={handleMarkerClick}>
          <CreateMarker latitude={props.latitude} longitude={props.longitude} />
        </InfoWindow>
      )}
    </Marker>
  );
};

export default MapMarker;
