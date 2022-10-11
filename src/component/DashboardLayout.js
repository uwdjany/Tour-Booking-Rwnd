import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const DashboardLayout = ({children}) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined onClick={()=>navigate('/dashboard')}/>,
              label:<h4 onClick={()=>navigate('/dashboard ')} style={{color:"white"}}>Dashboard</h4>
            },
            {
              key: '2',
              icon: <VideoCameraOutlined onClick={()=>navigate('/admin/user')}/>,
              label: <h4 onClick={()=>navigate('/admin/user')} style={{color:"white"}}>Manager Users</h4>,
            },
            {
              key: '3',
              icon: <UploadOutlined onClick={()=>navigate('/admin/trip')}/>,
              label: <h4 onClick={()=>navigate('/admin/trip')} style={{color:"white"}}>Manager Trips</h4>,
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;