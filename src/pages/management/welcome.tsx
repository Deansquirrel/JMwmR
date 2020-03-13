import React from 'react';
import styles from './welcome.less';
import { Link } from 'umi';

function WelcomePage(props: any) {
  return (
    <div>
      <div>
        <h1 className={styles.title}>Page Management Welcome {'0.0.111'}</h1>
      </div>
      <Link to="/">to Home page</Link>
    </div>
  );
}

export default WelcomePage;