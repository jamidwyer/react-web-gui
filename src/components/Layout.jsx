import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header name="HORD" link="" logo="" menuLinks={[]} />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
