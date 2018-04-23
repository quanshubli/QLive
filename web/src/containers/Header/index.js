import React, { Component } from "react";
import { connect } from "react-redux";

import Logo from "../../components/Logo";
import Menu from "../../components/Menu";
import User from './user';
import Register from './register';
import Login from './login';
import { Input, Button } from "antd";

import './index.scss';

const Search = Input.Search;

class Header extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    registerVisible: false,
    loginVisible: false
  }

  handleMenuClick = (href) => {
    const { history } = this.props;
    history.push(href);
  }

  handleSearch = (value) => {
    const { history } = this.props;
    if (value == '') {
      return;
    }
    history.push(`/search/${value}`);
  }

  handleLoginShow = () => {
    this.setState({
      loginVisible: true
    });
  }
  handleLoginHide = () => {
    this.setState({
      loginVisible: false
    });
  }
  handleRegisterShow = () => {
    this.setState({
      registerVisible: true
    });
  }
  handleRegisterHide = () => {
    this.setState({
      registerVisible: false
    });
  }

  render() {
    const { user } = this.props;
    const { registerVisible, loginVisible } = this.state;
    return (
      <div className='header'>
        <Logo text="QLive" />
        <Menu style={{ marginLeft: 50 }} onClick={this.handleMenuClick}>
          <Menu.Item href="/">首页</Menu.Item>
          <Menu.Item href="/lives">全部</Menu.Item>
          <Menu.Item href="/sorts">分类</Menu.Item>
        </Menu>
        <Search
          placeholder="搜直播间"
          onSearch={this.handleSearch}
          style={{ width: 200, marginLeft: 50 }}
        />
        {
          user ?
            <div className='user-part'>
              <User user={user} />
            </div> 
            :
            <div className='user-part'>
              <Button className='user-part-btn' onClick={this.handleLoginShow}>登录</Button>
              <Button className='user-part-btn' onClick={this.handleRegisterShow}>注册</Button>
            </div>  
        }
        <Register visible={registerVisible} onCancel={this.handleRegisterHide} />
        <Login visible={loginVisible} onCancel={this.handleLoginHide} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user
  };
};

export default connect(mapStateToProps)(Header);