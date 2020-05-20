import React from 'react';

import styles from './login.less';
import BaseComponent from '@/component/BaseComponent';
import { Form, Input, Button, message } from 'antd';

import { history } from 'umi';

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

    setTimeout(
      () =>
        this.setState({
          isLoging: false,
        }),
      3000,
    );
    // user
    //     .checkLogin(username, password)
    //     .then(function (data) {
    //         console.log(data);
    //         if (data.code == 0) {
    //             message.info(
    //                 data.msg == undefined || data.msg.trim() == ''
    //                     ? '登录成功'
    //                     : data.msg,
    //             );
    //             //成功登录后，变更登录状态并缓存登录返回信息
    //             if (data.data != undefined) {
    //                 store.dispatch(UserInfo(data.data));
    //             }
    //             //登录成功后跳转页面
    //             gotoSuccessPage();
    //         } else {
    //             message.warn(data.msg);
    //         }
    //     })
    //     .finally(() => {
    //         this.setState({
    //             isLoging: false,
    //         });
    //     });
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
