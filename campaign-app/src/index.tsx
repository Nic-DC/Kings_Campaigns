import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Provider store={store}>
      <App />
    </Provider>
  </LocalizationProvider>
);
