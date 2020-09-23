import React from 'react';
import styles from './Root.less';

import BaseWithStoreComponent from '@/components/BaseWithStoreComponent';

class RootLayouts extends BaseWithStoreComponent {
  render() {
    return <div className={styles.div_root}>{this.props.children}</div>;
  }
}

export default RootLayouts;
