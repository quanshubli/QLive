import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Home = (props) => {
    return <div>Home Page</div>
}

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>,
    window.document.getElementById("root")
);