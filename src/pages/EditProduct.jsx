import { Button } from "antd";
import { Formik, Form } from "formik";
import { Input } from "formik-antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getProductById } from "../store/selector/productsSelector";
import * as Yup from "yup";
import { editProduct } from "../store/reducer/productsReducer";

const editProductValidationSchema = Yup.object().shape({
  id: Yup.string().required(),
  oldName: Yup.string().required(),
  newName: Yup.string().required(),
});

export const EditProduct = () => {
  const { productId } = useParams();
  const productInfo = useSelector(getProductById(productId));
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        id: productInfo.id,
        oldName: productInfo.name,
        newName: "",
      }}
      onSubmit={(values) => {
        dispatch(editProduct({ id: values.id, name: values.newName }));
        history.push("/scan-your-products");
      }}
      validationSchema={editProductValidationSchema}
    >
      {({ dirty, isValid }) => (
        <Form>
          <Input name="id" readOnly />
          <Input name="oldName" readOnly />
          <Input name="newName" />
          <h3>edit your product</h3>
          <Button htmlType="submit" disabled={!dirty || !isValid}>
            Submit Changes
          </Button>
        </Form>
      )}
    </Formik>
  );
};
