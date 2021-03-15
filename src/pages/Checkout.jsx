import React from "react";
import styled from "styled-components";

export const Checkout = () => {
  return (
    <Container>
      <Title>You Successfully checked out your products</Title>
    </Container>
  );
};

const Container = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 150px;
`;

const Title = styled.h1`
  text-align: center;
`;
