import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";

import "./css/bootstrap.css";
import "./css/font-awesome.min.css";
import "./css/style.css";
import "jquery/dist/jquery.min";
import "bootstrap/dist/js/bootstrap.min";

import reducer from "./reducers/index";

const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
