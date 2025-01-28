import React, { ReactNode } from 'react';
import { Layout, Menu, Dropdown, Avatar, Badge } from 'antd';
import { Link } from 'react-router-dom';
import { BellOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import './App.css';

const { Header, Content } = Layout;
interface MainLayoutProps {
    children: ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const menu = (
    <Menu>
      <Menu.Item key="0" icon={<UserOutlined />}>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="1" icon={<SettingOutlined />}>
        <Link to="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2" icon={<LogoutOutlined />}>Log out</Menu.Item>
    </Menu>
  );

  return (
    <Layout className="layout">
      <Header className="header">
        <Dropdown overlay={menu} trigger={['click']}>
          <div className="logo">
            <Avatar src={'/assets/photo.jpg'} />
          </div>
        </Dropdown>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} className="menu-right">
          <Menu.Item key="1">
            <div className="notification-box">100</div>
          </Menu.Item>
          <Menu.Item key="2">
            <Badge count={15}>
              <BellOutlined style={{ fontSize: '20px', color: '#08c' }} />
            </Badge>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default MainLayout;