import React from "react";
import { HashRouter, Route } from "react-router-dom";

import "./App.css";
import Home from "./router/Home";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
    </HashRouter>
  );
}

export default App;
