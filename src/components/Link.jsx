import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/function-component-definition
const Link = ({ children, setFilter }) => (
  // eslint-disable-next-line
  <a style={{ cursor: "pointer" }} onClick={() => setFilter()}>
    {children}
  </a>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Link;
