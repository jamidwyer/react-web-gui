import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ title }) => (
  <div className="border-b border-solid mt-4 mb-4">
    <h2 className="text-2xl font-normal">{title}</h2>
  </div>
);

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
