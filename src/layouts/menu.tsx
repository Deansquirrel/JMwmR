import { Menu } from 'antd';
import React from 'react';

import { history } from 'umi';

import { HomeOutlined, BookOutlined, SettingOutlined } from '@ant-design/icons';
import BaseComponent from '@/component/BaseComponent';

const { SubMenu } = Menu;

// import store from '@/data/store';
// import { DefaultOpenKeys } from '@/data/menuReducer';

export const selectedKeysList = {
  welcome: 'WELCOME',
  recordAdd: 'RECORD_ADD',
  recordDetailSearch: 'RECORD_DETAIL_SEARCH',
  recordSummarySearch: 'RECORD_SUMMARY_SEARCH',
  categoryAdd: 'CATEGORY_ADD',
  categoryList: 'CATEGORY_LIST',
};

export const openKeysList = {
  recordManagement: 'RECORD_MANAGEMENT',
  categoryManagement: 'CATEGORY_MANAGEMENT',
};

declare interface IState {
  openKey: string[];
  selectedKey: string[];
}

class MyMenu extends BaseComponent<{}, IState> {
  render() {
    return (
      <Menu theme={'dark'} mode={'inline'}>
        <Menu.Item
          key={selectedKeysList.welcome}
          onClick={() => history.push('/management/welcome')}
        >
          <HomeOutlined />
          <span>Welcome</span>
        </Menu.Item>
      </Menu>
    );
  }
}

export default MyMenu;

// export class SysMenu extends React.Component<{}, IState> {

//     // unsubscribe: any;
//     // componentDidMount() {
//     //     this.unsubscribe = store.subscribe(() => this.forceUpdate());
//     // }

//     // componentWillUnmount() {
//     //     this.unsubscribe();
//     // }

//     render() {
//         const currOpenKeys = store.getState().menu.defaultOpenKeys;
//         return (
//             <Menu
//                 openKeys={store.getState().menu.defaultOpenKeys}
//                 selectedKeys={store.getState().menu.defaultSelectedKeys}
//                 onOpenChange={(openKeys) => {
//                     if (openKeys.length < 1) {
//                         store.dispatch(DefaultOpenKeys(openKeys));
//                         return;
//                     }
//                     const latestOpenKey = openKeys.find(key => currOpenKeys.indexOf(key) === -1);
//                     if (latestOpenKey === undefined) {
//                         store.dispatch(DefaultOpenKeys([]));
//                     } else {
//                         store.dispatch(DefaultOpenKeys([latestOpenKey]));
//                     }
//                 }}
//                 theme={"dark"}
//                 mode={"inline"}
//             >
//                 <Menu.Item
//                     key={selectedKeysList.welcome}
//                     onClick={() => { history.push('/management/welcome'); }}
//                 >
//                     <HomeOutlined />
//                     <span>Welcome</span>
//                 </Menu.Item>
//                 <SubMenu
//                     key={openKeysList.recordManagement}
//                     title={
//                         <span>
//                             <BookOutlined />
//                             <span>记录管理</span>
//                         </span>
//                     }
//                 >
//                     <Menu.Item
//                         key={selectedKeysList.recordAdd}
//                         onClick={() => {
//                             history.push('/management/record/add');
//                         }}
//                     >
//                         <span>记录登记</span>
//                     </Menu.Item>
//                     <Menu.Item
//                         key={selectedKeysList.recordDetailSearch}
//                         onClick={() => {
//                             history.push('/management/record/detail');
//                         }}
//                     >
//                         <span>明细查询</span>
//                     </Menu.Item>
//                     <Menu.Item
//                         key={selectedKeysList.recordSummarySearch}
//                         onClick={() => {
//                             history.push('/management/record/summary');
//                         }}
//                     >
//                         <span>汇总查询</span>
//                     </Menu.Item>
//                 </SubMenu>
//                 <SubMenu
//                     key={openKeysList.categoryManagement}
//                     title={
//                         <span>
//                             <SettingOutlined />
//                             <span>分类管理</span>
//                         </span>
//                     }
//                 >
//                     <Menu.Item
//                         key={selectedKeysList.categoryAdd}
//                         onClick={() => {
//                             history.push('/management/category/add');
//                         }}
//                     >
//                         <span>添加分类</span>
//                     </Menu.Item>
//                     <Menu.Item
//                         key={selectedKeysList.categoryList}
//                         onClick={() => {
//                             history.push('/management/category/list');
//                         }}
//                     >
//                         <span>分类查询</span>
//                     </Menu.Item>
//                 </SubMenu>
//             </Menu>
//         );
//     };
// }
