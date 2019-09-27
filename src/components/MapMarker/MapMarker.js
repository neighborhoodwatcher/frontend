import React, { useState } from "react";
import { Marker, InfoWindow } from "react-google-maps";

import CreateMarker from "../CreateMarker/CreateMarker";
import "./MapMarker.scss";

const MapMarker = props => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMarkerClick = () => {
    setIsOpen(!isOpen);
  };

  // const showTitle = () => {
  //   console.log(props.title);

  // };

  return (
    <Marker
      position={{
        lat: props.latitude,
        lng: props.longitude
      }}
      onClick={handleMarkerClick}
      // onMouseOver={showTitle}
    >
      {isOpen && (
        <InfoWindow onCloseClick={handleMarkerClick}>
          {typeof props.title !== "undefined" ? (
            <div className="mapMarker">
              <span className="mapMarker__title">{props.title}</span>
              <hr className="mapMarker__line" />
              <p className="mapMarker__info">{props.info}</p>
            </div>
          ) : (
            <CreateMarker
              latitude={props.latitude}
              longitude={props.longitude}
            />
          )}
        </InfoWindow>
      )}
    </Marker>
  );
};

export default MapMarker;
