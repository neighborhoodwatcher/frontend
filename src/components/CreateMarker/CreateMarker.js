import React from "react";
import { Form, Field, Formik } from "formik";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import "./CreateMarker.scss";

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
            <Form className="form">
              <span className="form__header">Create Marker</span>
              <hr className="form__line" />
              <label htmlFor="title" className="form__label">
                Title
              </label>
              <Field
                type="text"
                onChange={props.handleChange}
                value={props.values.title}
                name="title"
                className="form__field"
                id="title"
              />
              <label htmlFor="info" className="form__label">
                Info
              </label>
              <Field
                type="text"
                value={props.values.info}
                name="info"
                component="textarea"
                className="form__field"
                id="info"
              />
              <button type="submit" className="form__button">
                Save Marker
              </button>
            </Form>
          )}
        />
      )}
    </Mutation>
  );
};

export default CreateMarker;
