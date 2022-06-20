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
import tours from '../assets/data/tours.json'
import AllTours from '../views/dashboard/Alltours';
import {Link} from 'react-router-dom'



const { Header, Sider, Content } = Layout;

const DashboardLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
      
        <Link to="/admin">Alltours</Link>
        <br />
        <Link to="/admin-dashboard">CreateTours</Link>
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
           <AllTours/>
          
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;