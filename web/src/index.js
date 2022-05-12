import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SearchResultContextProvider } from "./context/search-context";

ReactDOM.render(
  <React.StrictMode>
    <SearchResultContextProvider>
      <App />
    </SearchResultContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
