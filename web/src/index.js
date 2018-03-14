import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./model/store";
import App from "./router";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.document.getElementById("root")
);