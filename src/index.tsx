import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router } from "react-router-dom";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();