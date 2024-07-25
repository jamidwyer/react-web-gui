import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

// eslint-disable-next-line react/function-component-definition
const Button = ({ children, className, clickHandler, ...rest }) => {
  return (
    <button
      onClick={clickHandler}
      className={clsx(
        "h-10 items-center rounded-sm bg-bloodorange px-4 text-sm font-medium text-coconut transition-colors hover:bg-smashedPumpkin focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bloodorange active:bg-smashedPumpkin aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        className,
      )}
      type="button"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default Button;
