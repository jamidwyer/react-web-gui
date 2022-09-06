import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/function-component-definition
const Button = (props) => {
  const { name, clickHandler } = props;
  return (
    <div className="ml2">
      <button
        onClick={clickHandler}
        className="ph3 pv2 dim pointer f6 fw5"
        type="button"
      >
        {name}
      </button>
    </div>
  );
};

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Button;
