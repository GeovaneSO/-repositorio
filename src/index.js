import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle, ResetCSS } from "./style/global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResetCSS />
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
