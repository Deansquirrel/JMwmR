import React from 'react';

import styles from './login.less';
import BaseComponent from '@/component/BaseComponent';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { history } from 'umi';

import store from '@/data_cache/store';

import user from '@/service_interface/user';
import { UserInfo } from '@/data_cache/user';

declare interface IState {
  isLoging: boolean;
}

type State = Readonly<IState>;

// const checkLoginState = () => {
//   const { user_info } = store.getState().user;
//   if (user_info != undefined) {
//     //TODO 登录状态判断 需检查token有效性
//     return true;
//   } else {
//     return false;
//   }
// };

const gotoSuccessPage = () => {
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
  }

  onFinish = (username: string, password: string) => {
    this.setState({
      isLoging: true,
    });
    user
      .checkLogin(username, password)
      .then(function(data) {
        console.log(data);
        if (data.code == 0) {
          message.info(
            data.msg == undefined || data.msg.trim() == ''
              ? '登录成功'
              : data.msg,
          );
          //成功登录后，变更登录状态并缓存登录返回信息
          if (data.data != undefined) {
            store.dispatch(UserInfo(data.data));
          }
          //登录成功后跳转页面
          gotoSuccessPage();
        } else {
          message.warn(data.msg);
        }
      })
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
          name={'frm_login'}
          className={styles.login_div_form}
          onFinish={values => this.onFinish(values.username, values.password)}
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
