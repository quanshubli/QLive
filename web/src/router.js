import React, { Component } from "react";
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from "react-router-dom";

import Index from "./routes/index";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Index} />
        {/* <Route path="/all" component={All} /> */}
      </Switch>
    </HashRouter>
  );
};

export default App;