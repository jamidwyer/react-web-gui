import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/function-component-definition
const Link = ({ children, clickAction, href }) => (
  // eslint-disable-next-line
  <a href={href} onClick={() => clickAction()}>
    {children}
  </a>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  clickAction: PropTypes.func.isRequired,
};

export default Link;
