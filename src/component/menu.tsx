import { Menu } from 'antd';
import React from 'react';

import { history } from 'umi';

import { HomeOutlined, BookOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

import store from '@/data/store';
import { DefaultOpenKeys } from '@/data/menuReducer';

export const selectedKeysList = {
    welcome: "WELCOME",
    recordAdd: "RECORD_ADD",
    recordDetailSearch: "RECORD_DETAIL_SEARCH",
    recordSummarySearch: "RECORD_SUMMARY_SEARCH",
    categoryAdd: "CATEGORY_ADD",
    categoryList: "CATEGORY_LIST",
}

export const openKeysList = {
    recordManagement: "RECORD_MANAGEMENT",
    categoryManagement: "CATEGORY_MANAGEMENT",
}

declare interface IState {
    openKey: string[];
    selectedKey: string[];
}

export class SysMenu extends React.Component<{}, IState> {

    constructor(props: Readonly<{}>) {
        super(props);
        const { defaultOpenKeys, defaultSelectedKeys } = store.getState().menu;
        this.state = {
            openKey: defaultOpenKeys,
            selectedKey: defaultSelectedKeys,
        };
    }

    unsubscribe: any;
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const { openKey, selectedKey } = this.state;
        return (
            <Menu
                defaultOpenKeys={openKey}
                defaultSelectedKeys={selectedKey}
                theme={"dark"}
                mode={"inline"}
            >
                <Menu.Item
                    key={selectedKeysList.welcome}
                    onClick={() => { history.push('/management/welcome'); }}
                >
                    <HomeOutlined />
                    <span>Welcome</span>
                </Menu.Item>
                <SubMenu
                    key={openKeysList.recordManagement}
                    title={
                        <span>
                            <BookOutlined />
                            <span>记录管理</span>
                        </span>
                    }
                >
                    <Menu.Item
                        key={selectedKeysList.recordAdd}
                        onClick={() => {
                            history.push('/management/hello');
                        }}
                    >
                        <span>记录登记</span>
                    </Menu.Item>
                    <Menu.Item
                        key={selectedKeysList.recordDetailSearch}
                        onClick={() => {
                            history.push('/management/hello');
                        }}
                    >
                        <span>明细查询</span>
                    </Menu.Item>
                    <Menu.Item
                        key={selectedKeysList.recordSummarySearch}
                        onClick={() => {
                            history.push('/management/hello');
                        }}
                    >
                        <span>汇总查询</span>
                    </Menu.Item>
                </SubMenu>
                <SubMenu
                    key={openKeysList.categoryManagement}
                    title={
                        <span>
                            <SettingOutlined />
                            <span>分类管理</span>
                        </span>
                    }
                >
                    <Menu.Item
                        key={selectedKeysList.categoryAdd}
                        onClick={() => {
                            history.push('/management/hello');
                        }}
                    >
                        <span>添加分类</span>
                    </Menu.Item>
                    <Menu.Item
                        key={selectedKeysList.categoryList}
                        onClick={() => {
                            history.push('/management/hello');
                        }}
                    >
                        <span>分类查询</span>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        );
    };
}