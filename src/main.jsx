import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./sass/main.css";
import { MoralisProvider } from "react-moralis";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MoralisProvider initializeOnMount={false}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MoralisProvider>
);
