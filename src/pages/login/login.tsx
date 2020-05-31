import React from 'react';

import styles from './login.less';
import BaseComponent from '@/component/BaseComponent';
import { Form, Input, Button, message } from 'antd';

import { history } from 'umi';
import HttpUtils, { Method } from '@/component/HttpUtils';
import { IResponseMessage } from '@/type/Message';
import Constant from '@/component/Constant';
import Umirc from '.umirc';

declare interface IState {
  isLoging: boolean;
}

declare interface ILoginResponse {
  username: string;
  token: string;
}

type State = Readonly<IState>;

const handleLoginMessage = (data: ILoginResponse | undefined) => {
  if (data == undefined) {
    localStorage.removeItem(Constant.LOGIN_TOKEN);
    return;
  }
  localStorage.setItem(Constant.LOGIN_TOKEN, data.token);
  console.log('TODO username', data.username);
  history.push('/management/welcome');
};

class Login extends BaseComponent<{}, State> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      isLoging: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLoging: false,
    });
    let token = localStorage.getItem('token');
    if (token != null && token.trim() != '') {
      HttpUtils.request<ILoginResponse>(Method.POST, '/api/login').then(res =>
        handleLoginMessage(HttpUtils.handleData(res, true)),
      );
    }
  }

  onFinish = (username: string, password: string) => {
    this.setState({
      isLoging: true,
    });

    let data = {
      username: username,
      password: password,
    };

    HttpUtils.request<ILoginResponse>(Method.POST, '/api/login', data)
      .then(res => handleLoginMessage(HttpUtils.handleData(res)))
      .catch(e => message.error(`error:${e}`))
      .finally(() => {
        this.setState({
          isLoging: false,
        });
      });
  };

  render() {
    return (
      <div className={styles.login_div}>
        <div>
          <h1 className={styles.login_title}>Login</h1>
        </div>
        <Form
          name={'form_login'}
          className={styles.login_form}
          onFinish={values => {
            console.log(values);
            this.onFinish(values.username, values.password);
          }}
        >
          <Form.Item
            name={'username'}
            rules={[
              {
                required: true,
                message: 'please input username',
              },
            ]}
          >
            <Input
              disabled={this.state.isLoging}
              autoFocus={true}
              size={'large'}
              placeholder={'username'}
            />
          </Form.Item>
          <Form.Item
            name={'password'}
            rules={[
              {
                required: true,
                message: 'please input password',
              },
            ]}
          >
            <Input
              disabled={this.state.isLoging}
              size={'large'}
              type={'password'}
              placeholder={'password'}
            />
          </Form.Item>
          <Form.Item>
            <Button
              loading={this.state.isLoging}
              style={{ width: '100%', marginTop: '2rem' }}
              type={'primary'}
              size={'large'}
              htmlType={'submit'}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Login;
