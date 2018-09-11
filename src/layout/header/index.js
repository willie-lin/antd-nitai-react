//头部布局
import React from 'react'
import { Menu, Icon, Layout, Popover, Badge } from 'antd'
import { Link } from 'react-router-dom'
import * as screenfull from 'screenfull'
import avater from '../../images/james.jpg'
import SiderCustom from '../menu/sider'
import createHistory from 'history/createHashHistory'
import './index.less'

const history = createHistory();
const SubMenu = Menu.SubMenu;
const { Header } = Layout;
const ItemGroup = Menu.ItemGroup;

class Headers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Lebron', //用户名
      visible: false
    }
  }

  menuClick = e => {
    e.key === 'logout' && this.logout();
  };

  //退出登录
  logout = () => {
    history.push('/login');
  };

  //全屏
  screenFull = () => {
    if (screenfull.enabled) {
      screenfull.request()
    }
  }

  popoverHide = () => {
    this.setState({
        visible: false,
    });
  };

  handleVisibleChange = (visible) => {
      this.setState({ visible });
  };

  render () {
    const {path, isMobile} = this.props;
    return (
      <Header style={{background: '#fff', height: 65, padding: 0}} className="custom-theme">
        {
          isMobile ? (
            <Popover content={<SiderCustom path={path} popoverHide={this.popoverHide} />} trigger="click" placement="bottomLeft" visible={this.state.visible} onVisibleChange={this.handleVisibleChange}>
                <Icon type="bars" className="trigger custom-trigger" />
            </Popover>
          ) : (
            <Icon
              className="trigger custom-trigger"
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.props.toggle}
            />
          )
        }
        <Menu
          mode="horizontal"
          style={{ lineHeight: '64px', float: 'right'}}
          onClick={this.menuClick}
          >
            <Menu.Item key="full" onClick={this.screenFull} >
              <Icon type="arrows-alt" onClick={this.screenFull} />
            </Menu.Item>
            <Menu.Item key="notification">
              <Badge count={100} overflowCount={20} style={{marginLeft: 10}}>
                <Icon type="notification" />
              </Badge>
            </Menu.Item>
            {/* <i className="on bottom b-white" /> */}
            <SubMenu title={<span className="avatar"><img src={avater} alt="头像" /></span>}>
              <ItemGroup title="用户中心">
                <Menu.Item key="userName">{this.state.userName}</Menu.Item>
                <Menu.Item key="info">个人信息</Menu.Item>
                <Menu.Item key="logout"><span onClick={this.logout}>退出登录</span></Menu.Item>
              </ItemGroup>
            </SubMenu>
          </Menu>
          <style>{`
            .ant-menu-submenu-horizontal > .ant-menu {
              width: 120px;
              left: -40px;
            }
          `}</style>
      </Header>
    )
  }
}

export default Headers