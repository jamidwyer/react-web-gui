import React from "react";
import PropTypes from "prop-types";

function PageTitle({ title }) {
  return <h1>{title}</h1>;
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
