import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Home from "./Home";
import Lives from "./Lives";
import Sorts from "./Sorts";

import "../assets/style/base.scss";

const Index = (props) => {
  const handleMenuClick = (href) => {
    props.history.push(href);
  };
  return (
    <div>
      <Header>
        <Logo text="QLive" />
        <Menu style={{ marginLeft: 50 }} onClick={handleMenuClick}>
          <Menu.Item href="/">首页</Menu.Item>
          <Menu.Item href="/lives">全部</Menu.Item>
          <Menu.Item href="/sorts">分类</Menu.Item>
        </Menu>
      </Header>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/lives" component={Lives} /> */}
        <Route path="/lives/:sort" component={Lives} />
        <Route path="/sorts" component={Sorts} />
      </Switch>
    </div>
  );
};

export default Index;