import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from "react-router-dom";
import React from 'react';
import './appLayout.css';
import logo from '../assets/book.svg'

import AppContent from './content/appContent'

const { Header, Footer } = Layout;

const elements = ['1'].map((key) => ({
   key,
   label: <Link to="/">
      Home
   </Link>,
}));

const AppLayout = () => {
   return (
      <Layout>
         <Header className="header">
            <div className="pulsating-circle">
               <Link to="/">
                  <img src={logo} alt='logo'/>             
               </Link>            
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={elements} />
         </Header>
         <AppContent />
         <Footer
            style={{
               textAlign: 'center',
            }}
         >
            Ant Design ©2023 Created by Boy NextDoor
         </Footer>
      </Layout>
   );
};
export default AppLayout;
