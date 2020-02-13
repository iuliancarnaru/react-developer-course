import React, { Fragment } from "react";
import GlobalStyle from "../style/GlobalStyle";
import { Router } from "@reach/router";

import Header from "../components/Header";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <Router>
      <ExpenseDashboardPage path="/" />
      <AddExpensePage path="/create" />
      <EditExpensePage path="/edit/:id" />
      <HelpPage path="/help" />
      <NotFoundPage default />
    </Router>
  </Fragment>
);

export default AppRouter;
