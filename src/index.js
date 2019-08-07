import React from "react";
import { render } from "react-dom";
import { Route } from "react-router-dom";

import { Provider } from "react-redux";
import store, { history } from "./store";
import { ConnectedRouter } from "react-router-redux";

import App from "./components/App";
import "./styles/style.css";

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
