import React from "react";
import PropTypes from "prop-types";
import Button from "./Button.jsx";

function Form({ children, handler }) {
  return (
    <form>
      {children}
      <Button clickHandler={handler} />
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.element.isRequired,
  handler: PropTypes.func.isRequired,
};

export default Form;
