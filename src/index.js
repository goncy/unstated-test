import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "unstated";

import App from "./App";

import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

function renderApp() {
  ReactDOM.render(
    <Provider>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}

if (module.hot) {
  module.hot.accept("./App", renderApp);
}

registerServiceWorker();
renderApp();
