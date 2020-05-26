import React from 'react';

import styles from './login.less';
import BaseComponent from '@/component/BaseComponent';
import { Form, Input, Button, message } from 'antd';

import { history } from 'umi';
import { IResponseMessageSimple } from '@/type/Message';

declare interface IState {
  isLoging: boolean;
}

type State = Readonly<IState>;

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
  }

  onFinish = (username: string, password: string) => {
    this.setState({
      isLoging: true,
    });

    try {
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then(response => response.json())
        .catch(e => console.log('error', e))
        .then((data: IResponseMessageSimple) => {
          console.log(data);
          if (data.code == 0) {
            var msg = '登录成功';
            if (data.msg != '') msg = data.msg;
            console.log(msg);
          } else {
            console.log('login error:[%d]%s', data.code, data.msg);
          }
        })
        .finally(() =>
          this.setState({
            isLoging: false,
          }),
        );
    } catch (e) {
      console.log('request failed', e);
    }
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
