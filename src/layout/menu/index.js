import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const renderMenuItem =
  ({ url, name, icon, link, ...props }) =>
    <Menu.Item
      key={url || link}
      {...props}
    >
      <Link to={link || url}>
        {icon && <Icon type={icon} />}
        <span className="nav-text">{name}</span>
      </Link>
    </Menu.Item>;

const renderSubMenu =
  ({ url, name, icon, link, sub, ...props }) =>
    <Menu.SubMenu
      key={url || link}
      title={
        <span>
          {icon && <Icon type={icon} />}
          <span className="nav-text">{name}</span>
        </span>
      }
      {...props}
    >
      {sub && sub.map(item => renderMenuItem(item))}
    </Menu.SubMenu>;

export default ({ menus, ...props }) => <Menu {...props}>
  {menus && menus.map(
    item => item.sub && item.sub.length ?
      renderSubMenu(item) : renderMenuItem(item)
  )}
</Menu>;