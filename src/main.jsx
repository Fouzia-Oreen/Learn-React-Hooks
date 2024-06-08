import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalState from "./components/Context/index.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalState>
      <App />
    </GlobalState>
  </React.StrictMode>
);
