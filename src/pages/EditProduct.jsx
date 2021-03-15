import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getProductById } from "../store/selector/productsSelector";
import { editProduct } from "../store/reducer/productsReducer";
import { EditProductForm } from "../components/Forms";
import styled from "styled-components";

export const EditProduct = () => {
  const { productId } = useParams();
  const productInfo = useSelector(getProductById(productId));
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (values) => {
    dispatch(editProduct(values));
    history.push("/scan-your-products");
  };

  const onCancel = () => {
    history.push("/scan-your-products");
  };

  return (
    <Container>
      <EditProductForm
        productInfo={productInfo}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </Container>
  );
};

const Container = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 50px;
`;
