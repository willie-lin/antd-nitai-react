import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import SiderCustom from './components/SiderCustom';
import {  Switch, Redirect, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';




const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
class App extends Component {

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    render() {
        return (
            <BrowserRouter>
            <Layout style={{ minHeight: '100vh' }}>
                <SiderCustom/>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <p style={{color: '#6dc3d2', }}><span>拟态WEB</span></p>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>


                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ni Tai ©2018 Created by Yu An
                    </Footer>
                </Layout>
            </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
