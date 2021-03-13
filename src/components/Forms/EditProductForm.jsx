import React from "react";
import { Button } from "antd";
import { Formik } from "formik";
import { Input } from "formik-antd";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { ActionContainer, CancelButton, StyledForm } from "./FormCss";

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
        <StyledForm>
          <h3>Edit Your Product</h3>
          <Input name="id" readOnly />
          <Input name="oldName" readOnly />
          <Input name="newName" />
          <ActionContainer>
            <CancelButton htmlType="button" onClick={onCancel}>
              Cancel
            </CancelButton>
            <Button
              htmlType="submit"
              disabled={!dirty || !isValid}
              type="primary"
            >
              Submit Changes
            </Button>
          </ActionContainer>
        </StyledForm>
      )}
    </Formik>
  );
};

EditProductForm.propTypes = {
  productInfo: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
