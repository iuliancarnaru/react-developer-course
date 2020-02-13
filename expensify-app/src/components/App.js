import React, { Fragment } from "react";
import styled from "styled-components";
import GlobalStyle from "../style/GlobalStyle";
import { Router, Link } from "@reach/router";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />

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
      <p>404 NotFoundPage</p>
    </div>
  );
};

export default App;
