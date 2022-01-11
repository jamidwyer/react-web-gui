import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/function-component-definition
const Button = (props) => {
  const { name, clickHandler } = props;
  return (
    <div>
      <button
        onClick={clickHandler}
        className="b ph3 pv2 mt2 dim ba b--black pointer f6 fw5 dark-gray"
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
