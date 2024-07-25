import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/function-component-definition
const InputButton = (props) => {
  const { clickHandler, disabled, modal, name } = props;
  return (
    <div>
      <input
        className="b px-3 py-2 sans-serif mt2 dim ba b--black near-white bg-near-black cursor text-sm mid-gray"
        onClick={clickHandler}
        disabled={disabled}
        modal={modal}
        type="submit"
        value={name}
      />
    </div>
  );
};

InputButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  modal: PropTypes.shape,
  name: PropTypes.string.isRequired,
};

InputButton.defaultProps = {
  disabled: false,
  modal: null,
};

export default InputButton;
