import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import styled from "react-emotion";

const H2 = styled("h2")`
  align-self: center;
  color: white;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 2.5rem;
  margin: 0;
  padding: 20px;
`;

const display = css`
  grid-area: display;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: radial-gradient(#19c75d, #10ba3f, #0fa911);
`;

const Display = ({ displayText }) => (
  <div className={display}>
    <H2>{displayText}</H2>
  </div>
);

Display.propTypes = {
  displayText: PropTypes.string.isRequired
};

export default Display;
