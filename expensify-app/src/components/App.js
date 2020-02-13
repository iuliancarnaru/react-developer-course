import React, { Fragment } from "react";
import styled from "styled-components";
import GlobalStyle from "../style/GlobalStyle";
import { Router, Link, navigate } from "@reach/router";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Router>
        <ExpenseDashboardPage path="/" />
        <AddExpensePage path="/create" />
        <EditExpensePage path="/edit" />
        <HelpPage path="/help" />
        <NotFoundPage default />
      </Router>
    </Fragment>
  );
};

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

const ExpenseDashboardPage = () => {
  return (
    <div>
      <p>ExpenseDashboardPage</p>
    </div>
  );
};

const AddExpensePage = () => {
  return (
    <div>
      <p>AddExpensePage</p>
    </div>
  );
};

const EditExpensePage = () => {
  return (
    <div>
      <p>EditExpensePage</p>
    </div>
  );
};

const HelpPage = () => {
  return (
    <div>
      <p>HelpPage</p>
    </div>
  );
};

const NotFoundPage = () => {
  return (
    <div>
      <p>Uppsss ... 404 Page not found! </p>
      <Link to="/">Go back to home page.</Link>
      {/* {setTimeout(() => navigate(`/`), 2000)} */}
    </div>
  );
};

export default App;
