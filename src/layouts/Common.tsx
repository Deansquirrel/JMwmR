import React from 'react';

import styles from './Common.less';
import BaseComponent from '@/components/BaseComponent';

class CommonLayouts extends React.Component {
  render() {
    return <div className={styles.div_common}>123{this.props.children}456</div>;
    // return <div>{this.props.children}</div>;
  }
}

export default CommonLayouts;
