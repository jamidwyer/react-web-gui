import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function PaginationNumber({ page, href, isActive, totalPages }) {
  const className = clsx(
    "flex h-10 min-w-10 items-center justify-center text-sm",
  );

  return isActive ? (
    <div className={className}>
      {page} of {totalPages}
    </div>
  ) : (
    <>
      <Link href={href} className={className}>
        {page}
      </Link>
      of {totalPages}
    </>
  );
}

export default function Pagination({ currentPage, totalPages }) {
  return (
    <div className="inline-flex px-4 gap-4 items-center">
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        className="h-6"
        // isDisabled={currentPage <= 1}
        direction="left"
      />
      <PaginationNumber page={currentPage} totalPages={totalPages} />
      <FontAwesomeIcon
        icon={faCircleArrowRight}
        className="h-6"
        // isDisabled={currentPage >= totalPages}
        direction="right"
      />
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

PaginationNumber.propTypes = {
  href: PropTypes.string,
  isActive: PropTypes.bool,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

PaginationNumber.defaultProps = {
  href: "",
  isActive: true,
};
