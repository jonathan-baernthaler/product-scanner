import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Home = () => {
  return (
    <>
      <Container>
        <Title>Simply Press</Title>
        <StyledButton type="primary">
          <Link to="/scan-your-products">Start</Link>
        </StyledButton>
        <Title>And Scan Your Products</Title>
      </Container>
    </>
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
  font-size: 64px;
  font-weight: 700;
  text-align: center;
`;

const StyledButton = styled(Button)`
  width: 150px;
  height: 40px;
  border-radius: 50px;
  margin-bottom: 20px;
`;
