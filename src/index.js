import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./Container/store/index";
import App from "./App";
import MainPage from "../src/Container/service/index";


render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById("root")
);
