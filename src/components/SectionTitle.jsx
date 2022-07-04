import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/function-component-definition
const SectionTitle = ({ title }) => (
  <div className="bb mt4 mb4">
    <h3 className="f3 fw4">{title}</h3>
  </div>
);

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
