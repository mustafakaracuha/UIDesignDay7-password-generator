import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./reset.css";
import toast, { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Toaster position="top-right" />
  </>
);
