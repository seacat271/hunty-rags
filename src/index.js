import React from "react";
import ReactDOM from "react-dom/client";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);
