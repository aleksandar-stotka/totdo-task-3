import React from "react";
import { render } from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AppProvider } from "./context";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
