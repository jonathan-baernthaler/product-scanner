import { Button } from "antd";
import { Formik } from "formik";
import { Input } from "formik-antd";
import * as Yup from "yup";
import PropTypes from "prop-types";
import React from "react";
import { ActionContainer, CancelButton, StyledForm } from "./FormCss";

const productValidationSchema = Yup.object().shape({
  id: Yup.string().required(),
  name: Yup.string().required(),
});

export const AddProductForm = ({ productId, onSubmit, onCancel }) => {
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
        <StyledForm>
          <h3>give your product a name</h3>
          <Input name="id" readOnly />
          <Input name="name" />
          <ActionContainer>
            <CancelButton type="button" onClick={onCancel}>
              Cancel
            </CancelButton>
            <Button
              htmlType="submit"
              disabled={!dirty || !isValid}
              type="primary"
            >
              Add to Basket
            </Button>
          </ActionContainer>
        </StyledForm>
      )}
    </Formik>
  );
};

AddProductForm.propTypes = {
  productId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
