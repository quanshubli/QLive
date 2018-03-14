import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "../components/Header";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Home from "./Home";
import AllLives from "./AllLives";
import Sort from "./Sort";

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
          <Menu.Item href="/all">全部</Menu.Item>
          <Menu.Item href="/sort">分类</Menu.Item>
        </Menu>
      </Header>
      <Route exact path="/" component={Home} />
      <Route path="/all" component={AllLives} />
      <Route path="/sort" component={Sort} />
    </div>
  );
};

export default Index;