import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "../assets/style/base.scss";

import Header from "../components/Header";
import Logo from "../components/Logo";
import Menu from "../components/Menu";

class Index extends Component {
    constructor(props) {
        super(props);
        this.onMenuClick = this.onMenuClick.bind(this);
    }

    onMenuClick(href) {
    }

    render() {
        return (
            <div>
                <Header>
                    <Logo text="QLive" />
                    <Menu style={{ marginLeft: 50 }} onClick={this.onMenuClick}>
                        <Menu.Item href="home">首页</Menu.Item>
                        <Menu.Item href="whole">全部</Menu.Item>
                        <Menu.Item href="sort">分类</Menu.Item>
                    </Menu>
                </Header>
            </div>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Index} />
        </Switch>
    </BrowserRouter>,
    window.document.getElementById("root")
);