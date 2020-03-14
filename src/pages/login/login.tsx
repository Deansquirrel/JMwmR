import React from 'react';
import { Link } from 'umi';
import styles from './login.less';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// import constant from "@/component/constant";
import { Form, Input, Button } from 'antd';

const LoginForm = () => {

  const [form] = Form.useForm();

  return (
    <Form
      className={styles.login_form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input you username"
          }
        ]}
      >
        <Input size={"large"}
          prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input you password"
          }
        ]}
      >
        <Input size={"large"}
          prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25' }} />}
          placeholder="Password"
          type="password"
        />
      </Form.Item>
      <Form.Item>
        <Button
          // loading:isLoading
          loading={false}
          type="primary"
          style={{ width: '100%', marginTop: 30 }}
          size={"large"}
          htmlType={"submit"}
        >
          Log in
        </Button>
      </Form.Item>
    </Form >
  )
}

const onFinish = (values: any) => {
  console.log("success", values);
  // isLoading = true;
  const checkResult = checkLogin(values.username, values.password);
  if (checkResult) {
    console.log("check login success");
  } else {
    console.log("check login failed");
  }
  // isLoading = false;
}

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed", errorInfo);
}

const checkLogin = async (username: string, password: string) => {
  console.log("checkLogin");
  console.log(username, password);
  fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
    .then(response => response.json())
    .then(function (data) {
      if (data.code == 0) {
        return true;
      } else {
        if (data.msg != undefined) {
          console.log(data.msg);
        }
        return false;
      }
    })
    .catch(function (e) {
      console.log(e);
      return false;
    });
}

export default () => {
  return (
    <div className={styles.div_login_form}>
      <div>
        <h1 className={styles.title}>Login</h1>
      </div>
      <LoginForm />
      <Link to="/management/welcome">to Welcome</Link>
      {/* <div className={styles.cp}>
        {constant.copyright}
      </div> */}
    </div>
  );
}