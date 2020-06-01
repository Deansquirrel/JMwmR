import React from 'react';
import styles from './management.less';
import { Row, Col, Menu, Layout } from 'antd';
import BaseComponent from '@/component/BaseComponent';

const { SubMenu } = Menu;

const style = { background: '#0092ff', padding: '8px 0' };

declare interface IState {}

type State = Readonly<IState>;

class Management extends BaseComponent<{}, State> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout style={{ backgroundColor: 'transparent' }}>
        <Row>
          <div className={styles.div_banner}>Top Banner</div>
        </Row>

        {/* <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row> */}
      </Layout>
    );
  }
}

export default Management;

// export default (props: any) => {
//   return (
//     <div>
//       <div className={styles.div_banner}>
//         <div className={`${styles.div_content} ${styles.div_banner_content}`}>
//           <h1 className={styles.h1_title}>ManagementLayouts</h1>
//         </div>
//       </div>
//       <div className={styles.div_content} style={{ marginTop: '0.5rem' }}>
//         <Row gutter={8}>
//           <Col span={6}>
//             <div className={styles.div_user}>
//               <span>用户：yuansong</span>
//             </div>
//             <div style={{ marginTop: '0.5rem' }} className={styles.div_left}>
//               <Menu
//                 defaultSelectedKeys={['1']}
//                 defaultOpenKeys={['sub1']}
//                 mode="inline"
//               >
//                 <SubMenu
//                   key="sub1"
//                   title={
//                     <span>
//                       <span>Navigation One</span>
//                     </span>
//                   }
//                 >
//                   <Menu.ItemGroup key="g1" title="Item 1">
//                     <Menu.Item key="1">Option 1</Menu.Item>
//                     <Menu.Item key="2">Option 2</Menu.Item>
//                   </Menu.ItemGroup>
//                   <Menu.ItemGroup key="g2" title="Item 2">
//                     <Menu.Item key="3">Option 3</Menu.Item>
//                     <Menu.Item key="4">Option 4</Menu.Item>
//                   </Menu.ItemGroup>
//                 </SubMenu>
//                 <SubMenu key="sub2" title="Navigation Two">
//                   <Menu.Item key="5">Option 5</Menu.Item>
//                   <Menu.Item key="6">Option 6</Menu.Item>
//                   <SubMenu key="sub3" title="Submenu">
//                     <Menu.Item key="7">Option 7</Menu.Item>
//                     <Menu.Item key="8">Option 8</Menu.Item>
//                   </SubMenu>
//                 </SubMenu>
//                 <SubMenu
//                   key="sub4"
//                   title={
//                     <span>
//                       <span>Navigation Three</span>
//                     </span>
//                   }
//                 >
//                   <Menu.Item key="9">Option 9</Menu.Item>
//                   <Menu.Item key="10">Option 10</Menu.Item>
//                   <Menu.Item key="11">Option 11</Menu.Item>
//                   <Menu.Item key="12">Option 12</Menu.Item>
//                 </SubMenu>
//               </Menu>
//             </div>
//           </Col>
//           <Col span={18}>
//             <div style={{ padding: 20 }} className={styles.div_right}>
//               {props.children}
//             </div>
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// };
