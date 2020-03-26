import React from 'react';
import { Layout, Menu } from 'antd';



// import { Link } from 'umi';

import styles from './managementLayouts.less';
const { Header, Footer, Sider, Content } = Layout;

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import constant from "@/component/constant";
import { SiderProps } from 'antd/lib/layout/Sider';

import { SysMenu } from "@/component/menu";

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
                    // collapsedWidth={collapsedWidth}
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
                    <SysMenu />
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