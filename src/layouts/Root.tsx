import React from 'react';

import styles from './Root.less';

class RootLayouts extends React.Component {
  render() {
    return <div className={styles.div_root}>{this.props.children}</div>;
  }
}

export default RootLayouts;
