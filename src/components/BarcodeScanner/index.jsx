import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Quagga from "quagga";
import config from "./config.json";
import styled from "styled-components";

export const BarcodeScanner = ({ onDetect }) => {
  useEffect(() => {
    Quagga.init(config, (err) => {
      if (err) {
        console.log(err, "error msg");
      }
      Quagga.start();
    });

    Quagga.onDetected((result) => onDetect(result.codeResult.code));

    return function cleanup() {
      Quagga.stop();
    };
  }, [onDetect]);

  return <Scanner id="barcodeScanner" />;
};

BarcodeScanner.propTypes = {
  onDetect: PropTypes.func.isRequired,
};

const Scanner = styled.div`
  .drawingBuffer {
    display: none;
  }
`;
