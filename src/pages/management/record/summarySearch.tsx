import React from 'react';
import styles from './summarySearch.less';

import store from '@/data/store';
import { DefaultOpenKeys, DefaultSelectedKeys } from '@/data/menuReducer';

import { selectedKeysList, openKeysList } from '@/component/menu';

const menuInit = () => {
    store.dispatch(DefaultOpenKeys([openKeysList.recordManagement]));
    store.dispatch(DefaultSelectedKeys([selectedKeysList.recordSummarySearch]));
}

class RecordSummarySearch extends React.Component {

    componentDidMount() {
        menuInit();
    }

    render() {
        return (
            <div>
                Record Summary Search
            </div>
        )
    }
}

export default RecordSummarySearch;