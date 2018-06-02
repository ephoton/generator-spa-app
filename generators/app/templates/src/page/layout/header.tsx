/**
 *
 */
import { Breadcrumb, Button, Icon } from 'antd';
import * as React from 'react';
import { EventHandler, FormEvent } from 'react';
import { Link, Route, Router } from 'react-router-dom';

const { Item } = Breadcrumb;

export interface IBreadcrumb {
  title: string;
  path?: string;
}

export interface IHeaderProps {
  toggleCollapse: EventHandler<FormEvent<any>>;
  breadcrumbs: IBreadcrumb[];
  collapsed: boolean;
}

export interface IHeaderState {
}

export class Header extends React.Component<IHeaderProps, IHeaderState> {
  state: IHeaderState;

  constructor(props: IHeaderProps) {
    super(props);

    this.state = {
    };
  }

  logout = async () => {
      //
  }

  render() {
    const { children, toggleCollapse, breadcrumbs, collapsed } = this.props;

    return (
      <div className='admin-header'>
        <div className='top-banner'>
          <Icon
          className=''
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={ toggleCollapse.bind(this) }
          />
        </div>
        <div className='admin-header-breadcrumb'>
          <Breadcrumb>
          {
            breadcrumbs.map(crumb => {
              return crumb && crumb.path ? <Item key={ crumb.title }><Link to={ crumb.path }>{ crumb.title }</Link></Item> : <Item key={ crumb.title }>{ crumb.title }</Item>;
            })
          }
          </Breadcrumb>
        </div>
      </div>
    );
  }
}
