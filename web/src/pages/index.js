import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "../assets/style/base.scss";

import Header from "../components/Header";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Home from "../components/Home";
import All from "../components/All";
import Sort from "../components/Sort";

class Index extends Component {
    constructor(props) {
        super(props);
        this.onMenuClick = this.onMenuClick.bind(this);
    }

    onMenuClick(href) {
        this.props.history.push(href);
    }

    render() {
        return (
            <div>
                <Header>
                    <Logo text="QLive" />
                    <Menu style={{ marginLeft: 50 }} onClick={this.onMenuClick}>
                        <Menu.Item href="/">首页</Menu.Item>
                        <Menu.Item href="/all">全部</Menu.Item>
                        <Menu.Item href="/sort">分类</Menu.Item>
                    </Menu>
                </Header>
                <Route exact path="/" component={Home} />
                <Route path="/all" component={All} />
                <Route path="/sort" component={Sort} />
            </div>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Index} />
            {/* <Route path="/all" component={All} /> */}
        </Switch>
    </BrowserRouter>,
    window.document.getElementById("root")
);