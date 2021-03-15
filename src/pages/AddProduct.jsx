import React from "react";
import { useSelector } from "react-redux";
import { ProductScanner } from "../components/ProductScanner";
import { ProductTable } from "../components/ProductTable";
import { selectProducts } from "../store/selector/productsSelector";
import styled from "styled-components";
import { Button } from "antd";
import { Link } from "react-router-dom";

export const AddProduct = () => {
  const products = useSelector(selectProducts);
  return (
    <Page>
      <ProductScanner />
      <Container>
        <ProductTable products={products} />
        <StyledButton type="primary">
          <Link to="/checkout">Checkout</Link>
        </StyledButton>
      </Container>
    </Page>
  );
};

const Page = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
