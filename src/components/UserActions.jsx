import React from "react";
import PropTypes from "prop-types";
import { BsPersonSquare } from "react-icons/bs";

function UserActions({ user }) {
  return (
    <button type="button" aria-label="Show user menu">
      <BsPersonSquare />
    </button>
  );
}

UserActions.propTypes = {
  user: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default UserActions;
