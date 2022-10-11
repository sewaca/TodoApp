import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import { ScopedCssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ScopedCssBaseline sx={{ background: "unset" }}>
      <App />
    </ScopedCssBaseline>
  </React.StrictMode>
);
