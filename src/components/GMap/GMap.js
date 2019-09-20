import React, { useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

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

    // Apollo query
    const GET_MARKERS = gql`
      query getMarkers {
        markers {
          title
          info
          latitude
          longitude
        }
      }
    `;

    const { loading, error, data } = useQuery(GET_MARKERS);

    if (loading) return <div>Loading...</div>;
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
            position={{
              lat: parseFloat(clickCoord.lat),
              lng: parseFloat(clickCoord.lng)
            }}
            onClick={onToggleOpen}
          >
            {isOpen && (
              <InfoWindow onCloseClick={onToggleOpen}>
                <div>
                  <h1>Info Window Title</h1>
                  <p>THIS IS AN INFO WINDOW!!!</p>

                  <h1>welcome</h1>
                  <h2>test</h2>
                </div>
              </InfoWindow>
            )}
          </Marker>
        )}

        {props.isMarkerShown &&
          data.markers.map(marker => (
            <Marker
              position={{
                lat: parseFloat(marker.latitude),
                lng: parseFloat(marker.longitude)
              }}
              onClick={onToggleOpen}
            >
              {isOpen && (
                <InfoWindow onCloseClick={onToggleOpen}>
                  <div>
                    <h1>{marker.title}</h1>
                    <p>{marker.info}</p>
                    {console.log(marker)}
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))}
      </GoogleMap>
    );
  })
);

export default GMap;
