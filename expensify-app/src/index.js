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

store.dispatch(addExpense({ description: "Water bill", amount: 4500 }));
store.dispatch(addExpense({ description: "Gas bill" }));
store.dispatch(setTextFilter("water"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

render(jsx, document.getElementById("root"));
