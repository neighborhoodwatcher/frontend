import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

import FormikCreateMarker from "../CreateMarker/CreateMarker"

const GMap = withScriptjs(
  withGoogleMap(props => {
    const [clickCoord, setClickCoord] = useState({});
    const [isOpen, setIsOpen] = useState(false);

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

    // Apollo Mutations
    const CREATE_MARKER = gql`
      mutation createMarker(
        $title: String!
        $info: String!
        $latitude: float8
        $longitude: float8
        $user_id: Int!
      ) {
        insert_markers(
          objects: {
            title: $title
            latitude: $latitude
            longitude: $longitude
            info: $info
            user_id: $user_id
          }
        ) {
          affected_rows
        }
      }
    `;

    const handleClick = event => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setClickCoord({ lat, lng });
    };

    const saveMarker = () => {
      insert_markers({
        variables: {
          title: "yes",
          info: "no",
          latitude: parseFloat(clickCoord.lat),
          longitude: parseFloat(clickCoord.lng),
          user_id: 1
        }
      });
    };

    // Apollo hooks
    const { loading, error, data } = useQuery(GET_MARKERS);
    const [insert_markers] = useMutation(CREATE_MARKER);

    if (loading) return <div>Loading...</div>;
    return (
      <GoogleMap
        defaultZoom={10}
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
                {/* <div>
                  <button onClick={saveMarker}>Save Marker?</button>
                </div> */}
                <FormikCreateMarker/>
              </InfoWindow>
            )}
          </Marker>
        )}

        {/* {props.isMarkerShown &&
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
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))} */}
      </GoogleMap>
    );
  })
);

export default GMap;
