import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../containers/Header";
import Home from "./Home";
import Lives from "./Lives";
import Sorts from "./Sorts";
import Search from "./Search";

import "../assets/style/base.scss";

const Index = (props) => {
  return (
    <div>
      <Header {...props} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/lives" exact component={Lives} />
        <Route path="/lives/:sort" component={Lives} />
        <Route path="/search/:keyword" component={Search} />
        <Route path="/sorts" component={Sorts} />
      </Switch>
    </div>
  );
};

export default Index;