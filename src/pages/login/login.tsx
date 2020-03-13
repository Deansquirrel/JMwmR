import React from 'react';
import { Link } from 'umi';
import styles from './login.less';

import constant from "@/component/constant";

export default () => {
  return (
    <div className={styles.login_form}>
      <div>
        <h1 className={styles.title}>Page login {constant.version}</h1>
      </div>
      <Link to="/management/welcome">to Welcome</Link>
    </div>
  );
}