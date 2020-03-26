import React from 'react';

import store from '@/data/store';
import { DefaultOpenKeys, DefaultSelectedKeys } from '@/data/menuReducer';

import { selectedKeysList, openKeysList } from '@/component/menu';

const menuInit = () => {
    store.dispatch(DefaultOpenKeys([openKeysList.categoryManagement]));
    store.dispatch(DefaultSelectedKeys([selectedKeysList.categoryAdd]));
}

class CategoryAdd extends React.Component {

    componentDidMount() {
        menuInit();
    }

    render() {
        return (
            <div>
                Category Add
            </div>
        )
    }
}

export default CategoryAdd;