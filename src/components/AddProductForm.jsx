import { Button } from "antd";
import { Formik, Form } from "formik";
import { Input } from "formik-antd";
import * as Yup from "yup";
import PropTypes from "prop-types";
import React from "react";

const productValidationSchema = Yup.object().shape({
  id: Yup.string().required(),
  name: Yup.string().required(),
});

export const AddProductForm = ({ productId, onSubmit }) => {
  return (
    <Formik
      initialValues={{ id: productId, name: "" }}
      onSubmit={(values) => {
        try {
          onSubmit(values);
        } catch (error) {
          console.log(error, "error msg");
        }
      }}
      validationSchema={productValidationSchema}
    >
      {({ dirty, isValid }) => (
        <Form>
          <Input name="id" readOnly />
          <Input name="name" />
          <h3>give your product a name</h3>
          <Button htmlType="submit" disabled={!dirty || !isValid}>
            Add to Basket
          </Button>
        </Form>
      )}
    </Formik>
  );
};

AddProductForm.propTypes = {
  productId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
