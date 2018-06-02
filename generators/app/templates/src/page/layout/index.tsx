import { Layout as AntdLayout, LocaleProvider } from 'antd';
import * as _ from 'lodash';
import * as React from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';
import * as moment from 'moment';
import * as zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

import { Footer as LocalFooter } from './footer';
import { Header as LocalHeader, IBreadcrumb } from './header';
import { Sidebar as LocalSidebar } from './sidebar';

import { Api, IPageRoute, PageRoutes } from './../../config';

import './../../style/layout/index.less';

const { Header, Footer, Sider, Content } = AntdLayout;

export enum PageLoadStatus {
  pending = 1,
  notFound,
  found
}

export interface IPropsInfo {
  match: RouteComponentProps<{}>;
  content: React.ReactElement<any>
}

export interface IStateInfo {
  collapsed: boolean;
  status: PageLoadStatus;
  routes: JSX.Element[];
  breadcrumbs: IBreadcrumb[];
}

moment.locale('zh-cn');

export class Layout extends React.Component<IPropsInfo, IStateInfo> {
  state: IStateInfo;
  constructor(props: IPropsInfo) {
    super(props);

    this.state = {
      collapsed: false,
      status: PageLoadStatus.pending,
      routes: [],
      breadcrumbs: []
    };
  }

  componentWillMount() {
    // this.loginCheck();
  }

  toggleCollapse = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed
    });
  }

  render() {
    const { collapsed, status, routes, breadcrumbs } = this.state;
    const { match, content } = this.props;

    return (
      <LocaleProvider locale={ zh_CN as any }>
        <AntdLayout className='admin-layout'>
          <Sider
            breakpoint='lg'
            className='admin-sider'
            collapsed={ collapsed }
            collapsible
            trigger={null}
            width={256}
          >{ <LocalSidebar
            collapsed={ collapsed }
          /> }</Sider>
          <AntdLayout>
            <Header>{ <LocalHeader
              toggleCollapse={ this.toggleCollapse }
              breadcrumbs={ breadcrumbs }
              collapsed={ collapsed }
            /> }</Header>
            <Content>
              { content }
            </Content>
            <Footer>{ <LocalFooter /> }</Footer>
          </AntdLayout>
        </AntdLayout>
      </LocaleProvider>
    );
  }
}
