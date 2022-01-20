import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";
import { GlobalStyle } from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ModalProvider>
        <App />
        <GlobalStyle />
      </ModalProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
