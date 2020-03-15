import React from 'react';
import styles from './pageDav.less';

import store from "@/data/store";
import { LoginUserName, ILoginState } from "@/data/loginReducer";

import { Button } from 'antd';


class PageDav extends React.Component {
    unsubscribe: any;

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const state = store.getState().login;
        return (
            <div>

                <h1 className={styles.title}>Page Dav</h1>
                <div>
                    <span>TestVal: {state.username == undefined ? "" : state.username}</span>
                </div>
                <div>
                    <Button type={"primary"} onClick={() => addVal()}>ChangeVal</Button>
                </div>
            </div >
        )
    }
}

export default PageDav;

const addVal = () => {
    store.dispatch(
        LoginUserName((new Date()).toString())
    );
}