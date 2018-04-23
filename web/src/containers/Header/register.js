import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../model/actions';

import { Modal, Input, Icon, Form, message } from 'antd';
const FormItem = Form.Item;

const FormItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
};

class Register extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    phone: '',
    password: '',
    repassword: '',
    nickname: '',
  }

  handleChange = (e, type) => {
    const value = e.target.value;
    this.setState({
      [type]: value
    });
  }

  handleOk = () => {
    const { dispatch, onCancel } = this.props;
    const { phone, password, repassword, nickname } = this.state;
    if (phone == '' || password == '' || nickname == '') {
      message.warning('信息不完整');
      return;
    }
    if (repassword !== password) {
      message.warning('两次密码不一致');
      return;
    }
    const data = {
      phone, password, nickname
    };
    dispatch(register(
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
    const { phone, password, repassword, nickname } = this.state;
    return (
      <Modal  
        title='注册'
        visible={this.props.visible}
        cancelText='取消'
        okText='注册'
        onOk={this.handleOk}
        onCancel={this.props.onCancel}
      >
        <Form>
          <FormItem label='手机号' {...FormItemLayout}>
            <Input placeholder='phone' value={phone} onChange={(e) => this.handleChange(e, 'phone')} />
          </FormItem>
          <FormItem label='密码' {...FormItemLayout}>
            <Input type='password' placeholder='password' value={password} onChange={(e) => this.handleChange(e, 'password')} />
          </FormItem>
          <FormItem label='确认密码' {...FormItemLayout}>
            <Input type='password' placeholder='password' value={repassword} onChange={(e) => this.handleChange(e, 'repassword')} />
          </FormItem>
          <FormItem label='昵称' {...FormItemLayout}>
            <Input placeholder='nickname' value={nickname} onChange={(e) => this.handleChange(e, 'nickname')} />
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default connect()(Register);