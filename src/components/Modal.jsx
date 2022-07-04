import { func, oneOfType, shape } from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import CloseButton from "./CloseButton";

// eslint-disable-next-line
const Modal = (props) => {
  const { children } = props;
  const navigate = useNavigate();

  const back = (e) => {
    e.stopPropagation();
    navigate(-1);
  };

  return (
    <div // eslint-disable-line
      onClick={back}
      tabIndex={0}
      role="button"
      className="rui-modal-bg items-center flex h-100"
    >
      <div className="rui-modal center v-mid">
        <CloseButton />
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: oneOfType([shape, func]).isRequired,
};

export default Modal;
