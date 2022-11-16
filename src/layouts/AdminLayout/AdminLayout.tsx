import './AdminLayout.less';

import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, Space } from 'antd';
import { useState } from 'react';

import Hamburger from '../../components/Hamburger/Hamburger';
import Logo from '../../components/Logo/Logo';

const { Header, Sider, Content } = Layout;

const menus: any = [
  {
    key: 'nav 1',
    label: 'Menu 1',
    icon: <UserOutlined />,
  },
  {
    key: 'nav 2',
    label: 'Menu 2',
    default: true,
    icon: <VideoCameraOutlined />,
  },
  {
    key: 'nav 3',
    label: 'Menu 3',
    icon: <UploadOutlined />,
  },
];

export type AdminLayout = BaseLayout;

const AdminLayout = ({ children, style }: AdminLayout) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="AdminLayout" style={style}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Logo />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={menus?.filter((item: any) => item.default)}
          items={menus}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Hamburger collapsed={collapsed} setCollapsed={setCollapsed} />

          <Space
            style={{
              textAlign: 'left',
              float: 'left',
              marginLeft: '20px',
              border: '1px solid red',
            }}
          >
            <Button>Action L1</Button>
            <Button>Action L2</Button>
            <Button>Action L3</Button>
          </Space>

          <Space
            style={{
              textAlign: 'justify',
              margin: '0 auto',
              border: '1px solid green',
            }}
          >
            <Button>Action C1</Button>
            <Button>Action C2</Button>
            <Button>Action C3</Button>
          </Space>

          <Space
            style={{
              textAlign: 'right',
              float: 'right',
              marginRight: '20px',
              border: '1px solid blue',
            }}
          >
            <Button>Action R1</Button>
            <Button>Action R2</Button>
            <Button>Action R3</Button>
          </Space>
        </Header>
        <Content className="site-layout-content">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
