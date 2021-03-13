import { Button } from "antd";
import { Form } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-row-gap: 10px;
  text-align: center;
`;

export const ActionContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const CancelButton = styled(Button)`
  margin-right: 20px;
`;
