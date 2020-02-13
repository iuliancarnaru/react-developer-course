import React from "react";
import { Link } from "@reach/router";

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : null;
};

const NavLink = props => <Link getProps={isActive} {...props} />;

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/create">Create</NavLink>
      <NavLink to="/help">Help</NavLink>
    </header>
  );
};

export default Header;
