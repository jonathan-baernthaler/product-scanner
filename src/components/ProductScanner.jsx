import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BarcodeScanner } from "../components/BarcodeScanner";
import { EditProductForm, AddProductForm } from "../components/Forms";
import { addProduct, editProduct } from "../store/reducer/productsReducer";
import { getProductById } from "../store/selector/productsSelector";
import styled from "styled-components";

export const ProductScanner = () => {
  const dispatch = useDispatch();
  const [productId, setProductId] = useState("");
  const productInfo = useSelector(getProductById(productId));

  const onDetect = (productId) => setProductId(productId);

  const onAddProduct = (product) => {
    dispatch(addProduct(product));
    setProductId("");
  };
  const onEditProduct = (product) => {
    dispatch(editProduct(product));
    setProductId("");
  };

  const onCancel = () => setProductId("");

  if (!productId) {
    return (
      <Container>
        <Subtitle>scan your product</Subtitle>
        <BarcodeScanner onDetect={onDetect} />
      </Container>
    );
  }

  return (
    <FormContainer>
      {productInfo ? (
        <EditProductForm
          productInfo={productInfo}
          onSubmit={onEditProduct}
          onCancel={onCancel}
        />
      ) : (
        <AddProductForm
          productId={productId}
          onSubmit={onAddProduct}
          onCancel={onCancel}
        />
      )}
    </FormContainer>
  );
};

const FormContainer = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 110px;
`;

const Container = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 50px;
`;

const Subtitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 25px;
`;
