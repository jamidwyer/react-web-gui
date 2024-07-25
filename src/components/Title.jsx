import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/function-component-definition
const Title = ({ title }) => (
  <h4 className="f4 font-normal ph0 mh0">{title}</h4>
);

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
