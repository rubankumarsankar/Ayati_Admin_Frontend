import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HeadProvider } from "react-head"; // ✅ import provider
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <React.StrictMode>
      <HeadProvider>
        <App />
      </HeadProvider>
    </React.StrictMode>
  </HelmetProvider>
);
