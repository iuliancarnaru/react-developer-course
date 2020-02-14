import React from "react";
import { render } from "react-dom";
import "normalize.css";
import AppRouter from "./routes/AppRouter";
import configureStore from "./redux/store/configureStore";

const store = configureStore();

console.log(store.getState());

render(<AppRouter />, document.getElementById("root"));
