import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SuperTokensWrapper } from "supertokens-auth-react";
import App from "./App.jsx";
import "./index.css";
import "./supertokensConfig";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SuperTokensWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SuperTokensWrapper>
  </React.StrictMode>
);
