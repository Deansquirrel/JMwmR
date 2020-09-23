import React from 'react';
import styles from './Management.less';

class ManagementLayouts extends React.Component {
  render() {
    return <div className={styles.div_management}>{this.props.children}</div>;
  }
}

export default ManagementLayouts;
