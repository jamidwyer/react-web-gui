import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import configureStore from "./store";

require("dotenv").config({ path: ".env" });

if (process.env.NODE_ENV !== "production") {
  // eslint-disable-next-line
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

const config = process.env;
ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <App config={config} />
    </Router>
  </Provider>,
  document.getElementById("root"),
);
