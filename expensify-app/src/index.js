import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { addExpense } from "./redux/actions/expenses";
import { setTextFilter } from "./redux/actions/filters";
import getVisibleExpenses from "./redux/selectors/expenses";
import "normalize.css";
import AppRouter from "./routes/AppRouter";
import configureStore from "./redux/store/configureStore";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

render(jsx, document.getElementById("root"));
