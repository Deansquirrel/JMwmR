import React from 'react';
import styles from './welcome.less';
import { Link } from 'umi';

import store from '@/data/store';
import { DefaultOpenKeys, DefaultSelectedKeys } from '@/data/menuReducer';

import { selectedKeysList } from '@/component/menu';

const menuInit = () => {
  store.dispatch(DefaultOpenKeys([]));
  store.dispatch(DefaultSelectedKeys([selectedKeysList.welcome]));
}

class WelcomePage extends React.Component {
  componentDidMount() {
    menuInit();
  }
  render() {
    return (
      <div>
        <div>
          <h1 className={styles.title}>Page Management Welcome {'0.0.111'}</h1>
        </div>
        <Link to="/">to Home page</Link>
      </div>
    );
  }
}

// function WelcomePage(props: any) {
//   return (
//     <div>
//       <div>
//         <h1 className={styles.title}>Page Management Welcome {'0.0.111'}</h1>
//       </div>
//       <Link to="/">to Home page</Link>
//     </div>
//   );
// }

export default WelcomePage;