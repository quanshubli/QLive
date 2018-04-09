import React from "react";
import { connect } from "react-redux";

import HeaderWrapper from "../../components/HeaderWrapper";
import Logo from "../../components/Logo";
import Menu from "../../components/Menu";
import { Input } from "antd";
const Search = Input.Search;

const Header = (props) => {
  const { dispatch, history } = props;
  const handleMenuClick = (href) => {
    history.push(href);
  };
  const handleSearch = (value) => {
    if (value == '') {
      return;
    }
    history.push(`/search/${value}`);
  };
  return (
    <HeaderWrapper>
      <Logo text="QLive" />
      <Menu style={{ marginLeft: 50 }} onClick={handleMenuClick}>
        <Menu.Item href="/">首页</Menu.Item>
        <Menu.Item href="/lives">全部</Menu.Item>
        <Menu.Item href="/sorts">分类</Menu.Item>
      </Menu>
      <Search
        placeholder="搜直播间"
        onSearch={handleSearch}
        style={{ width: 200, marginLeft: 50 }}
      />
    </HeaderWrapper>
  );
};

export default connect()(Header);