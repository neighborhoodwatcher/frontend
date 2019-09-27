import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

import MapMarker from "../MapMarker/MapMarker";

const Map = withScriptjs(
  withGoogleMap(props => {
    const [clickCoord, setClickCoord] = useState({});

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

    // Apollo hooks
    const { loading, error, data } = useQuery(GET_MARKERS);

    // Grabs coords from mouseclick
    const handleMapClick = event => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setClickCoord({ lat, lng });
    };

    if (loading) return <div>Loading...</div>;
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{
          lat: props.coords.lat,
          lng: props.coords.lng
        }}
        onClick={event => handleMapClick(event)}
      >
        {props.isMarkerShown && (
          // For placing new markers
          <MapMarker
            latitude={parseFloat(clickCoord.lat)}
            longitude={parseFloat(clickCoord.lng)}
          />
        )}

        {props.isMarkerShown &&
          // For populating map with markers from DB
          data.markers.map(marker => (
            <MapMarker
              key={marker.id}
              latitude={parseFloat(marker.latitude)}
              longitude={parseFloat(marker.longitude)}
              title={marker.title}
              info={marker.info}
            />
          ))}
      </GoogleMap>
    );
  })
);

export default Map;
