import React from "react";
import ReactDOM from "react-dom/client";
import { createContext } from "react";

import "./index.css";
//Here, "namedTest" is an named import, we can't change it's name when importing unlike default export "App"
import App from "./App";
const ColorContext = createContext();
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <ColorContext.Provider value={"(This is through the Context!)"}>
    <App />
  </ColorContext.Provider>
);
export default ColorContext;
