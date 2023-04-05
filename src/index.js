import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import SmthContextProvider from "./context learn/smth-context";

ReactDOM.render(
  <SmthContextProvider>
    <App />
  </SmthContextProvider>,
  document.getElementById("root")
);
