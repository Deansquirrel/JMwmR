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
          <h1>Login</h1>
        </div>
        <Form>
          <Form.Item>
            <Input />
          </Form.Item>
          <Form.Item>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button>Log in</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Login;
