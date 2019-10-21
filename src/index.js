import React from "react";
import ReactDOM from "react-dom";
import Apps from "./components/Apps";
import { BrowserRouter, Route } from "react-router-dom";
// import Task from "./components/Task";
// import Task2 from "./components/Task2";

ReactDOM.render(
  <BrowserRouter>
    <Apps />
  </BrowserRouter>,
  document.querySelector("#root")
);
