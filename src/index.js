import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { v4 as uuid } from "uuid";

// const reducer = (state = 1, action) => {
//   console.log(action);
//   switch (action.type) {
//     case "ADD-2":
//       return state + 2;
//     case "NHAN-2":
//       return state * 2;
//     case "UPDATE":
//       return action.payload;
//     default:
//       return state;
//   }
// };
const initFilter = "";
const initTasks = [
  { id: "task1", task: "ĐI CÂU CÁ", completed: false },
  { id: "task2", task: "ĐI CÂU CHÓ", completed: true },
  { id: "task3", task: "ĐI CÂU LƯƠN", completed: false },
];
const reducerFilter = (state = initFilter, action) => {
  switch (action.type) {
    case "SEARCH":
      return action.payload;
    default:
      return state;
  }
};
const reducerTasks = (state = initTasks, action) => {
  switch (action.type) {
    case "ADD-TASK":
      return [...state, { id: uuid(), task: action.payload, completed: false }];
    case "DELETE-TASK":
      // state.forEach((element, id) => {
      //   if (element.id === action.payload) {
      //     state.splice(id, 1);
      //   }
      // });
      let arr = state.filter((element) => element.id !== action.payload);
      return arr;

    default:
      return state;
  }
};

const reducer = combineReducers({ filter: reducerFilter, tasks: reducerTasks });
export const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
