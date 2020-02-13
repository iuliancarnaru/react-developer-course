import React from "react";
import { Link } from "@reach/router";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "red" : "blue"
        }
      };
    }}
  />
);

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/create">Create</NavLink>
      <NavLink to="/edit">Edit</NavLink>
      <NavLink to="/help">Help</NavLink>
    </header>
  );
};

export default Header;
