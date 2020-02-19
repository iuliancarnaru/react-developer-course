import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "normalize.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import AppRouter from "./routes/AppRouter";
import configureStore from "./redux/store/configureStore";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

render(jsx, document.getElementById("root"));
