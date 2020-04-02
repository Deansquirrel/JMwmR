import React from 'react';
import BaseComponent from '@/component/BaseComponent';
import { Layout } from 'antd';

import styles from './management.less';
import { SiderProps } from 'antd/lib/layout';

const { Header, Footer, Sider, Content } = Layout;

import { history } from 'umi';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import constant from '@/global/constant';
import MyMenu from './menu';

declare interface IState {
  collapsed: boolean;
}

class ManagementLayouts extends BaseComponent<{}, IState> {
  siderRef = React.createRef<React.Component<SiderProps, any, any>>();

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
    });
  }

  getSiderWidth() {
    const collapsed = this.state.collapsed;
    const collapsedWidth = this.siderRef.current?.props.collapsedWidth;
    const width = this.siderRef.current?.props.width;
    if (collapsed) {
      return collapsedWidth == undefined ? 80 : collapsedWidth;
    } else {
      return width == undefined ? 200 : width;
    }
  }

  changeCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const collapsed = this.state.collapsed;
    const silderWidth = this.getSiderWidth();
    return (
      <Layout style={{ overflowY: 'scroll' }}>
        <Sider
          breakpoint="lg"
          className={styles.layout_managemnet_sider}
          onCollapse={collapsed => {
            this.setState({
              collapsed: collapsed,
            });
          }}
          // collapsed={this.state.collapsed}>
          collapsed={collapsed}
        >
          <div className={styles.layout_managemnet_logo} />
          <MyMenu />
        </Sider>
        <Layout style={{ marginLeft: silderWidth, minHeight: '100vh' }}>
          <Header className={styles.layout_managemnet_header}>
            {collapsed ? (
              <MenuUnfoldOutlined
                className={styles.layout_managemnet_trigger}
                onClick={() => this.changeCollapsed()}
              />
            ) : (
              <MenuFoldOutlined
                className={styles.layout_managemnet_trigger}
                onClick={() => this.changeCollapsed()}
              />
            )}
            <div
              className={styles.layout_managemnet_logout}
              onClick={() => {
                //TODO 清楚缓存的登录信息
                // clearLoginInfo();
                history.push('/');
              }}
            >
              <LogoutOutlined
                title={'退出登录'}
                className={styles.layout_managemnet_trigger}
              />
            </div>
          </Header>
          <Content className={styles.layout_managemnet_content}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <span className={styles.layout_managemnet_footer}>
              {constant.copyright}
            </span>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default ManagementLayouts;
