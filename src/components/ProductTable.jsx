import { Button, Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeProduct } from "../store/reducer/productsReducer";
import PropTypes from "prop-types";
import styled from "styled-components";

export const ProductTable = ({ products }) => {
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      render: (_text, record) => (
        <>
          <Button onClick={() => dispatch(removeProduct({ id: record.id }))}>
            delete
          </Button>
          <Button>
            <Link to={`/edit-product/${record.id}`}>edit</Link>
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <StyledTable columns={columns} dataSource={products} />
    </>
  );
};

const StyledTable = styled(Table)`
  width: 80%;
  margin-top: 110px;
`;

ProductTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
