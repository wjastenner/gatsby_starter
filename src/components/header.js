import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Container from "../components/boxes/container";

const Header = ({ siteTitle }) => (
  <header>
    <Container bg="primary" flexDirection="row">
      <Link to="/">{siteTitle}</Link>
    </Container>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
