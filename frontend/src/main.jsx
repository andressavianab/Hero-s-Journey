import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RoutesApp } from "./RoutesApp";
import { SearchProvider } from "./contexts/Search";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchProvider>
      <RoutesApp />
    </SearchProvider>
  </React.StrictMode>
);
