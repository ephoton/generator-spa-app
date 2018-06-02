/**
 *
 */
import * as React from 'react';
import { Icon } from 'antd';
import {
  Router,
  Route,
  Link
} from 'react-router-dom';
import * as moment from 'moment';

export interface IFooterProps {
}

export interface IFooterState {
}

export class Footer extends React.Component<IFooterProps, IFooterState> {
  state: IFooterState;

  constructor(props: IFooterProps) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { children } = this.props;
    const thisYear = moment().year();
    const beginYear = 2014;

    return (
      <div className='admin-footer'>
        <p>
          <span>Copyright </span>
          <Icon type='copyright' />
          <span>{ beginYear }{ thisYear === beginYear ? '' : `-${ thisYear }` }</span>
          <span>Naturali.io</span>
        </p>
      </div>
    );
  }
}
