/**
 *
 */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Switch, Avatar, Dropdown } from 'antd';
import * as classNames from 'classnames';

const { SubMenu, Item, Divider } = Menu;

export interface ISidebarProps {
  collapsed: boolean;
}

export interface ISidebarState {
  current: string;
  theme: 'dark' | 'light' | undefined;
}

export class Sidebar extends React.Component<ISidebarProps, ISidebarState> {
  state: ISidebarState;
  constructor(props: ISidebarProps) {
    super(props);

    this.state = {
      current: 'dashboard',
      theme: 'dark'
    };
  }

  changeTheme(value: string) {
    this.setState({
      theme: value ? 'dark' : 'light'
    });
  }

  handleClick(data: any) {
    // this.setState({
    //     current: data.key
    // });
  }

  render() {
    const { current, theme } = this.state;
    const { collapsed } = this.props;

    return (
      <div className='admin-sidebar'>
        <div className='sidebar-logo' key="logo">
          <Link to="/">
            <i className='iconfont icon-logo_ic'></i>
            <h1>Naturali Admin</h1>
          </Link>
        </div>
        <Menu
          theme={ theme }
          onClick={ this.handleClick }
          defaultOpenKeys={ ['code'] }
          defaultSelectedKeys={ [current] }
          mode='inline'
        >
          <Item key='dashboard'>
            <Link to='/'>
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </Link>
          </Item>
          <Item key='users'>
            <Link to='/users'>
              <Icon type="user" />
              <span>Users</span>
            </Link>
          </Item>
        </Menu>
      </div>
    );
  }
}
