import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SearchIcon from "./SearchIcon";
import MenuLink from "./MenuLink";
import UserActions from "./UserActions";

function Header({
  name, link, logo, menuLinks, user,
}) {
  return (
    <header>
      <span>
        <MenuLink menuLinks={menuLinks} />
        <SearchIcon />
      </span>
      {logo ? <img src={logo} alt={name} /> : null}
      <Link to={link}>{name}</Link>
      <span>
        <UserActions user={user} />
      </span>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  logo: PropTypes.string,
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    }),
  ),
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    id: PropTypes.string,
  }),
};

Header.defaultProps = {
  logo: "",
  link: "/",
  menuLinks: {},
  user: {},
};

export default Header;
