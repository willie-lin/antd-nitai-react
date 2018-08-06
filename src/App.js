import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css';



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
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="user" /><span>用户管理</span></span>}
                    >
                        <Menu.Item key="3">用户列表</Menu.Item>
                        <Menu.Item key="4">添加用户</Menu.Item>
                        <Menu.Item key="5">权限管理</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="area-chart" /><span>态势感知</span></span>}
                    >
                        <Menu.Item key="6">攻击排行</Menu.Item>
                        <Menu.Item key="7">累计攻击次数</Menu.Item>
                        <Menu.Item key="8">攻击热点图</Menu.Item>
                        <Menu.Item key="9">实时信息</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title={<span><Icon type="dashboard" /><span>表决器管理</span></span>}
                    >
                        <Menu.Item key="3">表决器列表</Menu.Item>
                        <Menu.Item key="4">修改表决器</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub4"
                        title={<span><Icon type="team" /><span>执行体</span></span>}
                    >
                        <Menu.Item key="6"> 执行体负载信息</Menu.Item>
                        <Menu.Item key="8">执行体列表</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub5"
                        title={<span><Icon type="bulb" /><span>异常警报</span></span>}
                    >
                        <Menu.Item key="6">虚拟机IP</Menu.Item>
                        <Menu.Item key="8">当前状态</Menu.Item>
                        <Menu.Item key="8">出错原因</Menu.Item>
                        <Menu.Item key="8">出错处理</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub6"
                        title={<span><Icon type="global" /><span>网络拓扑</span></span>}
                    >
                        <Menu.Item key="6"></Menu.Item>
                        <Menu.Item key="8">T</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub7"
                        title={<span><Icon type="home" /><span>后台管理</span></span>}
                    >
                        <Menu.Item key="6"> 表决器虚拟机</Menu.Item>
                        <Menu.Item key="8">模板生成</Menu.Item>
                        <Menu.Item key="8">php处理</Menu.Item>
                        <Menu.Item key="8">sql处理</Menu.Item>
                        <Menu.Item key="8">状态检测</Menu.Item>
                        <Menu.Item key="8">错误信息推送</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub8"
                        title={<span><Icon type="team" /><span>Team</span></span>}
                    >
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        <Icon type="file" />
                        <span>File</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} >
                    <p style={{color: '#6dc3d2', }}><span>拟态WEB</span></p>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        Bill is a cat.
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ni Tai ©2018 Created by Yu An
                </Footer>
            </Layout>
        </Layout>
    );
  }
}

export default App;
