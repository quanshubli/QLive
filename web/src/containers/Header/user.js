import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../model/actions';

import { Dropdown, Menu, Icon } from 'antd';

const userMenu = (handleLogOut) => (
  <Menu>
    <Menu.Item>
      <a href="javascript:;" onClick={handleLogOut}>退出</a>
    </Menu.Item>
  </Menu>
);

const User = (props) => {
  const { user, dispatch } = props;
  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <Dropdown overlay={userMenu(handleLogOut)}>
      <a href="javascript:;">{user.nickname}<Icon type="down" /></a>
    </Dropdown>
  );
};

export default connect()(User);