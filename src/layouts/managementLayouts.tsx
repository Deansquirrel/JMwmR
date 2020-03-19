import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeIcon } from "@/component/svg";

import { history } from 'umi';

// import { Link } from 'umi';

import styles from './managementLayouts.less';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
import { MailOutlined, MenuUnfoldOutlined, MenuFoldOutlined, AppstoreOutlined, SettingOutlined, PieChartOutlined } from '@ant-design/icons';

import constant from "@/component/constant";
import { SiderProps } from 'antd/lib/layout/Sider';

declare interface IState {
    collapsed: boolean;
}

class ManagementLayouts extends React.Component<{}, IState> {

    sRef = React.createRef<React.Component<SiderProps, any, any>>();

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    componentDidMount() {
        let flag = false;
        if (document.body.clientWidth < 992) {
            flag = true;
        } else {
            flag = false;
        }
        this.setState({
            collapsed: flag,
        })
    }

    changeCollapsed() {

        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    getSiderWidth() {
        const collapsed = this.state.collapsed;
        const collapsedWidth = this.sRef.current?.props.collapsedWidth;
        const width = this.sRef.current?.props.width;
        if (collapsed) {
            return collapsedWidth == undefined ? 80 : collapsedWidth;
        } else {
            return width == undefined ? 200 : width;
        }
    }

    render() {
        const collapsed = this.state.collapsed;
        const silderWidth = this.getSiderWidth();
        return (
            <Layout style={{ overflowY: 'scroll' }}>
                <Sider
                    breakpoint="lg"
                    // collapsedWidth="0"
                    className={styles.sider}
                    ref={this.sRef}
                    onCollapse={collapsed => {
                        this.setState({
                            collapsed: collapsed,
                        });
                    }}
                    collapsed={this.state.collapsed}
                >
                    <div className={styles.logo} />
                    <Menu
                        defaultOpenKeys={['sub1']}
                        theme={"dark"}
                        mode={"inline"}
                    >
                        <Menu.Item key="welcome" onClick={() => { history.push('/management/welcome'); }}>
                            <HomeIcon />
                            <span>Welcome</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <MailOutlined />
                                    <span>Navigation One</span>
                                </span>
                            }
                        >
                            <Menu.Item key="1" onClick={() => { history.push('/management/hello'); }}>Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <AppstoreOutlined />
                                    <span>Navigation Two</span>
                                </span>
                            }
                        >
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu
                            key="sub4"
                            title={
                                <span>
                                    <SettingOutlined />
                                    <span>Navigation Three</span>
                                </span>
                            }
                        >
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: silderWidth, minHeight: "100vh" }}>
                    <Header className={styles.header}>
                        {
                            collapsed ?
                                (<MenuUnfoldOutlined className={styles.trigger} onClick={() => this.changeCollapsed()} />) :
                                (<MenuFoldOutlined className={styles.trigger} onClick={() => this.changeCollapsed()} />)

                        }
                    </Header>
                    <Content className={styles.content}>{this.props.children}</Content>
                    <Footer style={{ textAlign: "center" }}><span className={styles.footer}>{constant.copyright}</span></Footer>
                </Layout>
            </Layout >
        );
    }
}

export default ManagementLayouts;