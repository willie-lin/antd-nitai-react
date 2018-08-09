import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import {  Switch, Redirect, BrowserRouter , Link, Route, withRouter} from 'react-router-dom';
import '../App.css';

// const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const { Header, Content, Footer, Sider } = Layout;

class SiderCustom extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        return (
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="desktop" />
                        <span> 首页</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Menu.Item>
                    <SubMenu
                        key="/app/user"
                        title={<span><Icon type="user" /><span>用户管理</span></span>}>
                        <Menu.Item key="/app/user/user_list"><Link to={"/app/user/user_list"}>用户列表</Link></Menu.Item>
                        <Menu.Item key="/app/user/user_add"><Link to={"/app/user/user_add"}>添加用户</Link></Menu.Item>
                        <Menu.Item key="/app/user/user_edit"><Link to={"/app/user/user_edit"}>修改用户</Link></Menu.Item>
                        <Menu.Item key="/app/user/user_delete"><Link to={"/app/user/user_delete"}>添加用户</Link></Menu.Item>
                        <Menu.Item key="5">权限管理</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="/app/situational"
                        title={<span><Icon type="area-chart" /><span>态势感知</span></span>}
                    >
                        <Menu.Item key="/app/situational/attack"><Link to={"/app/situational/attack"}>攻击排行</Link></Menu.Item>
                        <Menu.Item key="/app/situational/attack_list"><Link to={"/app/situational/attack_list"}>累计攻击次数</Link></Menu.Item>
                        <Menu.Item key="/app/situational/attack_map"><Link to={"/app/situational/attack_map"}>攻击热点图</Link></Menu.Item>
                        <Menu.Item key="/app/situational/attack_information"><Link to={"/app/situational/attack_information"}>实时信息</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="/app/voter"
                        title={<span><Icon type="dashboard" /><span>表决器管理</span></span>}
                    >
                        <Menu.Item key="/app/voter/voter_list"><Link to={"/app/voter/voter_list"}>表决器列表</Link></Menu.Item>
                        <Menu.Item key="/app/voter/voter_edit"><Link to={"/app/voter/voter_edit"}>修改表决器</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="/app/executive"
                        title={<span><Icon type="team" /><span>执行体</span></span>}
                    >
                        <Menu.Item key="/app/executive/executive_load_information"><Link to={"/app/executive/executive_load_information"}> 执行体负载信息</Link></Menu.Item>
                        <Menu.Item key="/app/executive/executive_list"><Link to={"/app/executive/executive_list"}>执行体列表</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="/app/abnormal"
                        title={<span><Icon type="bulb" /><span>异常警报</span></span>}
                    >
                        <Menu.Item key="/app/abnormal/voter_abnormal"><Link to={"/app/abnormal/voter_abnormal"}>执行体警报</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="/app/topology"
                        title={<span><Icon type="global" /><span>网络拓扑</span></span>}
                    >
                        <Menu.Item key="/app/topology/voter_executive"><Link to={"/app/topology/voter_executive"}>执行体和表决器</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="/app/backstage"
                        title={<span><Icon type="home" /><span>后台管理</span></span>}
                    >
                        <Menu.Item key="/app/backstage/voter_virtual"> <Link to={"/app/backstage/voter_virtual"}>表决器虚拟机</Link></Menu.Item>
                        <Menu.Item key="/app/backstage/virtual_template"><Link to={"/app/backstage/virtual_template"}>模板生成</Link></Menu.Item>
                        <Menu.Item key="/app/backstage/php"><Link to={"/app/backstage/php"}>php处理</Link></Menu.Item>
                        <Menu.Item key="/app/backstage/sql"><Link to={"/app/backstage/sql"}>sql处理</Link></Menu.Item>
                        <Menu.Item key="/app/backstage/state_detection"><Link to={"/app/backstage/state_detection"}>状态检测</Link></Menu.Item>
                        <Menu.Item key="/app/backstage/an_error"><Link to={"/app/backstage/an_error"}>错误信息推送</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="/app/log"
                        title={<span><Icon type="team" /><span>日志管理</span></span>}
                    >
                        <Menu.Item key="/app/log/voter_log"><Link to={"/app/log/voter_log"}>表决器日志管理</Link></Menu.Item>
                        <Menu.Item key="/app/log/feedback"><Link to={"/app/log/feedback"}>反馈</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    };
}
export default withRouter(SiderCustom);