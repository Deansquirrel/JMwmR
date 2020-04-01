import React from 'react';

import styles from './login.less';
import BaseComponent from '@/component/BaseComponent';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

declare interface IState {
  isLoging: boolean;
}

type State = Readonly<IState>;

class Login extends BaseComponent<{}, State> {
  render() {
    return (
      <div className={styles.login_div}>
        <div>
          <h1 className={styles.login_title}>Login</h1>
        </div>
        <Form
          name={'frm_login'}
          className={styles.login_div_form}
          onFinish={values => {
            console.log(values);
          }}
        >
          <Form.Item
            name={'username'}
            rules={[
              {
                required: true,
                message: '请输入登录名',
              },
            ]}
          >
            <Input
              autoFocus={true}
              size={'large'}
              prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder={'username'}
            />
          </Form.Item>
          <Form.Item
            name={'password'}
            rules={[
              {
                required: true,
                message: '请输入登录密码',
              },
            ]}
          >
            <Input
              size={'large'}
              prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25' }} />}
              type={'password'}
              placeholder={'password'}
            />
          </Form.Item>
          <Form.Item>
            <Button
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
