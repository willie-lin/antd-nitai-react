import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import { menus } from '../../utils/menu';
import SiderMenu from './index';

const { Sider } = Layout;

class SiderBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: false,
      mode: 'inline',
      openKey: '',
      selectedKey: '',
      firstHide: true
    }
  }

  componentDidMount() {
    this.setMenuOpen(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onCollapse(nextProps.collapsed);
    this.setMenuOpen(nextProps)
  }

  setMenuOpen = props => {
    const { pathname } = props.location;
    this.setState({
      openKey: pathname.substr(0, pathname.lastIndexOf('/')),
      selectedKey: pathname
    });
  };

  onCollapse = (collapsed) => {
    this.setState({
      collapsed,
      firstHide: collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  };

  menuClick = e => {
    this.setState({
      selectedKey: e.key
    });
    const { popoverHide } = this.props;     // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
    popoverHide && popoverHide();
  };

  openMenu = v => {
    this.setState({
      openKey: v[v.length - 1],
      firstHide: false,
    })
  };

  render() {
    return (
      <Sider
        trigger={null}
        breakpoint="lg"
        collapsed={this.props.collapsed}
        style={{ overflowY: 'auto' }}
      >
        <div className="logo">
          <a href="https://github.com/" target='_blank' rel='noopener noreferrer'><Icon type="github" className="github white" /></a>
        </div>
        <SiderMenu
          menus={menus}
          onClick={this.menuClick}
          theme="dark"
          mode="inline"
          selectedKeys={this.state.selectedKey}
          openKeys={this.state.firstHide ? null : [this.state.openKey]}
          onOpenChange={this.openMenu}
        />
        <style>
          {`
          #nprogress .spinner{
            left: ${this.state.collapsed ? '70px' : '206px'};
            right: 0 !important;
          }
          `}
        </style>
      </Sider>
    )
  }
}

export default withRouter(SiderBar);
