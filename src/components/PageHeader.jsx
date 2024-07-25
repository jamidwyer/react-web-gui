import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserNavLinks from "./UserNavLinks.jsx";

export default function PageHeader({ logoIcon }) {
  return (
    <div className="flex h-40 shrink-0 flex-row items-end justify-between bg-bloodorange p-2 text-jasmineRice">
      <div className="flex flex-row items-end">
        <FontAwesomeIcon icon={logoIcon} className="h-20" />
        <h1 className="font-logo items-end antialiased">
          <strong>hord</strong>
        </h1>
      </div>
      <UserNavLinks />
    </div>
  );
}

PageHeader.propTypes = {
  logoIcon: PropTypes.object,
};

PageHeader.defaultProps = {
  logoIcon: null,
};
