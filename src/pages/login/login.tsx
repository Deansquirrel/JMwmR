import React, { RefObject } from 'react';
import BaseWithStoreComponent from '@/components/BaseWithStoreComponent';

import { Spin, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import styles from './login.less';
import './login.css';
import constants from '@/components/constants';

import * as httpHelper from '@/components/HttpHelper';

interface IState {
  loading: boolean;
}

interface LoginInfo {
  token: string;
}

const url_login_checkuser = '/api/login';

class Login extends BaseWithStoreComponent<{}, IState> {
  ref_input_username: RefObject<Input> = React.createRef<Input>();

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    if (super.componentDidMount !== undefined) {
      super.componentDidMount();
    }
    if (this.ref_input_username.current !== undefined) {
      this.ref_input_username.current?.focus();
    }
  }

  handleSubmit = async (values: any) => {
    console.log(values['username'], values['password']);
    this.setState({
      loading: true,
    });

    const data = await httpHelper.HttpPostJson<LoginInfo>(url_login_checkuser, {
      username: values['username'],
      password: values['password'],
    });

    if (data.code === 0) {
      console.log('login success');
      console.log(data.data?.token);
    } else {
      console.log('login failed');
    }

    this.setState({
      loading: false,
    });

    // setTimeout(() => {
    //   this.setState({
    //     loading: false,
    //   });
    // }, 3000);
  };

  render() {
    return (
      <div>
        <div className={styles.div_company}>{constants.companyName}</div>
        <div id={'div_login'} className={styles.div_login}>
          <Spin spinning={this.state.loading}>
            <h1>登 录</h1>
            <Form className={styles.form_login} onFinish={this.handleSubmit}>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: 'Please input your Username!' },
                ]}
              >
                <Input
                  size={'large'}
                  ref={this.ref_input_username}
                  prefix={<UserOutlined />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Please input your Password!' },
                ]}
              >
                <Input
                  size={'large'}
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type={'primary'}
                  size={'large'}
                  className={styles.btn_form_login}
                  htmlType={'submit'}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Spin>
        </div>
      </div>
    );
  }
}

export default Login;
