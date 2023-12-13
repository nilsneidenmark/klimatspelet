import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { SettingsProvider } from "./context/SettingsContext.jsx";
import { DisplayLoginOrSignupProvider } from "./context/DisplayLoginOrSignupContext.jsx";
import { AuthenticatedContextProvider } from "./context/AuthenticatedContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SettingsProvider>
      <DisplayLoginOrSignupProvider>
        <AuthenticatedContextProvider>
          <App />
        </AuthenticatedContextProvider>
      </DisplayLoginOrSignupProvider>
    </SettingsProvider>
  </React.StrictMode>
);
