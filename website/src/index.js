import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      {/* <ProSidebarProvider> */}
        <App />
      {/* </ProSidebarProvider> */}
    </Router>
  </React.StrictMode>
);
