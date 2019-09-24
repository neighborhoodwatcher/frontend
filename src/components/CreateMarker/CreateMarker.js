import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import { gql } from "apollo-boost";

const CreateMarker = () => {
  return (
    <div>
      <Form>
        <Field type="text" name="title" placeholder="Title" />
        <Field type="text" name="info" placeholder="Info" />
        <button>Save Marker</button>
      </Form>
    </div>
  );
};

const FormikCreateMarker = withFormik({
  mapPropsToStatus({ title, info }) {
    return {
      title: title || "",
      info: info || ""
    };
  },

  handleSubmit(values) {
    console.log(values);
    // form submission > db here
  }

})(CreateMarker);

export default FormikCreateMarker;
