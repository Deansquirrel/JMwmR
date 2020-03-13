import React from 'react';
import styles from './page1.less';

export default (props: any) => {
    console.log(props);
    return (
        <div>
            <h1 className={styles.title}>Page Test</h1>
        </div>
    );
}
