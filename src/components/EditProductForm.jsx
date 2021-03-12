import React from "react";
import { Button } from "antd";
import { Formik, Form } from "formik";
import { Input } from "formik-antd";
import * as Yup from "yup";
import PropTypes from "prop-types";

const editProductValidationSchema = Yup.object().shape({
  id: Yup.string().required(),
  oldName: Yup.string().required(),
  newName: Yup.string().required(),
});

export const EditProductForm = ({ onSubmit, onCancel, productInfo }) => {
  return (
    <Formik
      initialValues={{
        id: productInfo.id,
        oldName: productInfo.name,
        newName: "",
      }}
      onSubmit={(values) => onSubmit({ id: values.id, name: values.newName })}
      validationSchema={editProductValidationSchema}
    >
      {({ dirty, isValid }) => (
        <Form>
          <Input name="id" readOnly />
          <Input name="oldName" readOnly />
          <Input name="newName" />
          <h3>edit your product</h3>
          <Button htmlType="button" onClick={onCancel}>
            Cancel
          </Button>
          <Button htmlType="submit" disabled={!dirty || !isValid}>
            Submit Changes
          </Button>
        </Form>
      )}
    </Formik>
  );
};

EditProductForm.propTypes = {
  productInfo: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
