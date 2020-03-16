import React from 'react';
import { history, Link } from 'umi';
import styles from './login.less';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { Form, Input, Button } from 'antd';

import store from '@/data/store';
import { LoginUserName, LoginIsLogin, LoginToken } from '@/data/loginReducer';

const temp_token = '123';

const checkLogin = async (
  username: string,
  password: string,
): Promise<boolean> => {
  return fetch('/api/login', {
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
    .then(function(data) {
      if (data.code == 0) {
        //TODO 登录成功 缓存登录信息
        recordLoginInfo(username, temp_token);
        cacheLoginInfo(username, temp_token);
        return true;
      } else {
        if (data.msg != undefined) {
          console.log(data.msg);
        }
        clearLoginInfo();
        return false;
      }
    })
    .catch(function(e) {
      console.log(e);
      clearLoginInfo();
      return false;
    });
};

/**
 * 检查缓存的登录信息
 */
const checkLoginHis = async (): Promise<boolean> => {
  //TODO 检查localStorage中存储的登录信息,如果存在则验证并缓存
  // recordLoginInfo("yuansong", temp_token);
  return false;
};

/**
 * 记录登录信息
 * @param username
 * @param token
 */
const recordLoginInfo = (username: string, token: string) => {
  //记录登录信息
  store.dispatch(LoginUserName(username));
  store.dispatch(LoginIsLogin(true));
  store.dispatch(LoginToken(token));
};

/**
 * 将登录信息写入localStorge
 * @param username
 * @param token
 */
const cacheLoginInfo = (username: string, token: string) => {
  localStorage.setItem('username', username);
  localStorage.setItem('token', token);
};

const clearLoginInfo = () => {
  store.dispatch(LoginUserName(''));
  store.dispatch(LoginIsLogin(false));
};

const gotoManagementPage = () => {
  history.push('/management');
};

declare interface IState {
  isLoging: boolean;
  isLeave: boolean;
}

type State = Readonly<IState>;

class Login extends React.Component<{}, State> {
  unsubscribe: any;

  inputUsernameRef = React.createRef<Input>();
  inputPasswordRef = React.createRef<Input>();

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    this.inputUsernameRef.current?.focus();
    //读取缓存验证信息
    checkLoginHis()
      .then(flag => {
        if (flag) {
          gotoManagementPage();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      isLoging: false,
      isLeave: false,
    };
  }

  onFinish = (values: any) => {
    this.setState({ isLoging: true });
    checkLogin(values.username, values.password)
      .then(flag => {
        if (flag) {
          this.setState({ isLeave: true });
          gotoManagementPage();
        } else {
          this.inputPasswordRef.current?.focus();
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        if (!this.state.isLeave) {
          this.setState({ isLoging: false });
        }
      });
  };

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed', errorInfo);
    if (errorInfo.errorFields.length > 0) {
      const errInput = errorInfo.errorFields[0].name;
      if (errInput == 'username') {
        this.inputUsernameRef.current?.focus();
      }
      if (errInput == 'password') {
        this.inputPasswordRef.current?.focus();
      }
    }
  };

  render() {
    return (
      <div className={styles.div_login_form}>
        <div>
          <h1 className={styles.title}>Login</h1>
        </div>
        <Form
          name={'login_form'}
          className={styles.login_form}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input you username',
              },
            ]}
          >
            <Input
              size={'large'}
              prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              ref={this.inputUsernameRef}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input you password',
              },
            ]}
          >
            <Input
              size={'large'}
              ref={this.inputPasswordRef}
              prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25' }} />}
              placeholder="Password"
              type="password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              loading={this.state.isLoging}
              type="primary"
              style={{ width: '100%', marginTop: 30 }}
              size={'large'}
              htmlType={'submit'}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
        <Link to="/management/welcome">
          to Welcome {store.getState().login.username}
        </Link>
        {/* <div className={styles.cp}>
        {constant.copyright}
      </div> */}
      </div>
    );
  }
}

export default Login;
