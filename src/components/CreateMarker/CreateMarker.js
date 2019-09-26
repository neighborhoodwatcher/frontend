import React from "react";
import { Form, Field, Formik } from "formik";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

const CreateMarker = props => {
  const CREATE_MARKER = gql`
    mutation createMarker(
      $title: String!
      $info: String!
      $latitude: float8!
      $longitude: float8!
      $user_id: Int!
    ) {
      insert_markers(
        objects: {
          title: $title
          info: $info
          latitude: $latitude
          longitude: $longitude
          user_id: $user_id
        }
      ) {
        returning {
          title
          info
        }
      }
    }
  `;

  return (
    <Mutation mutation={CREATE_MARKER}>
      {(insert_markers, { loading }) => (
        <Formik
          initialValues={{ title: "", info: "" }}
          onSubmit={(values, actions) => {
            insert_markers({
              variables: {
                title: values.title,
                info: values.info,
                latitude: parseFloat(props.latitude),
                longitude: parseFloat(props.longitude),
                user_id: 1
              }
            });
          }}
          render={props => (
            <Form>
              <Field
                type="text"
                onChange={props.handleChange}
                value={props.values.title}
                name="title"
                placeholder="Title"
              />
              <Field
                type="text"
                value={props.values.info}
                name="info"
                placeholder="Info"
              />
              <button type="submit"> Save Marker </button>
            </Form>
          )}
        />
      )}
    </Mutation>
  );
};

export default CreateMarker;
