import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Index from "./routes/index";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} />
        {/* <Route path="/all" component={All} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;