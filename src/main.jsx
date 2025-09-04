import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HeadProvider } from "react-head"; // ✅ import provider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeadProvider>
      <App />
    </HeadProvider>
  </React.StrictMode>
);
