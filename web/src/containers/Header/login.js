import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../model/actions';

import { Modal, Input, Icon, Form, message } from 'antd';
const FormItem = Form.Item;

class Login extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    phone: '',
    password: ''
  }

  handleChange = (e, type) => {
    const value = e.target.value;
    this.setState({
      [type]: value
    });
  }

  handleOk = () => {
    const { dispatch, onCancel } = this.props;
    const { phone, password } = this.state;
    if (phone == '' || password == '') {
      message.warning('信息不完整');
      return;
    }
    const data = {
      phone, password
    };
    dispatch(login(
      data,
      (msg) => {
        onCancel();
      },
      (msg) => {
        message.error(msg);
      }
    ));
  }

  render() {
    const { phone, password } = this.state;
    return (
      <Modal
        width={300}
        title='登录'
        visible={this.props.visible}
        cancelText='取消'
        okText='登录'
        onOk={this.handleOk}
        onCancel={this.props.onCancel}
      >
        <Form>
          <FormItem>
            <Input
              prefix={<Icon type="phone" />}  
              placeholder='phone'
              value={phone}
              onChange={(e) => this.handleChange(e, 'phone')}
            />
          </FormItem>
          <FormItem>
            <Input
              prefix={<Icon type="lock" />}    
              type='password'
              placeholder='password'
              value={password}
              onChange={(e) => this.handleChange(e, 'password')}
            />
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default connect()(Login);