import React from "react";
import PropTypes from "prop-types";

const Display = ({ displayText }) => <div>{displayText}</div>;

Display.propTypes = {
  displayText: PropTypes.string.isRequired
};

export default Display;
