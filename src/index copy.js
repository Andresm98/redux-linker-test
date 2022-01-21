import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

// Store Data All Components -> Clobalized State

// Action ->  Increment
const increment = () => {
  return {
    type: "Increment",
  };
};

const decrement = () => {
  return {
    type: "Decrement",
  };
};

// Reducer -> Transform  lthe data
const counter = (state = 0, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
  }
};

let store = createStore(counter);

// Display it in the console
store.subscribe(() => console.log(store.getState()));

// Dispatch
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());







ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
