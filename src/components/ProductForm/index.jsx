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

export const ProductForm = ({ productId, onSubmit }) => {
  return (
    <Formik
      initialValues={{ id: productId, name: "" }}
      onSubmit={onSubmit}
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

ProductForm.propTypes = {
  productId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
