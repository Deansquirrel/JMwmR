import React from 'react';
import styles from './detailSearch.less';

import store from '@/data/store';
import { DefaultOpenKeys, DefaultSelectedKeys } from '@/data/menuReducer';

import { selectedKeysList, openKeysList } from '@/component/menu';

const menuInit = () => {
    store.dispatch(DefaultOpenKeys([openKeysList.recordManagement]));
    store.dispatch(DefaultSelectedKeys([selectedKeysList.recordDetailSearch]));
}

class RecordDetailSearch extends React.Component {

    componentDidMount() {
        menuInit();
    }

    render() {
        return (
            <div>
                Record Detail Search
            </div>
        )
    }
}

export default RecordDetailSearch;