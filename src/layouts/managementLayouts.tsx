import React from 'react';
import { Layout, Menu } from 'antd';

import styles from './managementLayouts.less';
const { Header, Footer, Sider, Content } = Layout;
import { MenuUnfoldOutlined, MenuFoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

import constant from "@/component/constant";
import { BasicProps } from 'antd/lib/layout/layout';
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
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1">
                            <UserOutlined />
                            <span className="nav-text">nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <VideoCameraOutlined />
                            <span className="nav-text">nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <UploadOutlined />
                            <span className="nav-text">nav 3</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <UserOutlined />
                            <span className="nav-text">nav 4</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: silderWidth, minHeight: "100vh" }}>
                    <Header className={styles.header}>
                        {
                            collapsed ?
                                (<MenuUnfoldOutlined className={styles.trigger} onClick={() => this.changeCollapsed()} />) :
                                (<MenuFoldOutlined className={styles.trigger} onClick={() => this.changeCollapsed()} />)

                        }
                        {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: { { styles.trigger }},
                            onClick: () => {
                            console.log("click");
                            },
                        })} */}
                    </Header>
                    <Content className={styles.content}>{this.props.children}</Content>
                    <Footer style={{ textAlign: "center" }}><span className={styles.footer}>{constant.copyright}</span></Footer>
                </Layout>
            </Layout >
        );
    }
}

export default ManagementLayouts;

// export default (props: any) => {
//     return (

//         <Layout>
//             <Sider
//                 breakpoint="lg"
//                 // collapsedWidth="0"
//                 onBreakpoint={broken => {
//                     console.log(broken);
//                 }}
//                 onCollapse={(collapsed, type) => {
//                     console.log(collapsed, type);
//                 }}
//                 zeroWidthTriggerStyle={{
//                     marginLeft: 200
//                 }}
//             // style={{
//             //     overflow: 'auto',
//             //     height: '100vh',
//             //     position: 'fixed',
//             //     left: 0,
//             // }}
//             >
//                 <div className="logo" />
//                 <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
//                     <Menu.Item key="1">
//                         <UserOutlined />
//                         <span className="nav-text">nav 1</span>
//                     </Menu.Item>
//                     <Menu.Item key="2">
//                         <VideoCameraOutlined />
//                         <span className="nav-text">nav 2</span>
//                     </Menu.Item>
//                     <Menu.Item key="3">
//                         <UploadOutlined />
//                         <span className="nav-text">nav 3</span>
//                     </Menu.Item>
//                     <Menu.Item key="4">
//                         <UserOutlined />
//                         <span className="nav-text">nav 4</span>
//                     </Menu.Item>
//                 </Menu>
//             </Sider>
//             <Layout>
//                 <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
//                 <Content style={{ margin: '24px 16px 0' }}>
//                     <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//                         content
//         </div>
//                 </Content>
//                 <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//             </Layout>
//         </Layout>
//     )
// }
