import * as React from 'react';
import * as ReactDom from 'react-dom';
import { DatePicker, Card, Pagination, Row, Col, Radio, Collapse, Input, Select, Button } from 'antd';
import * as moment from 'moment';
import { RadioChangeEvent } from 'antd/lib/radio';
import { connect, Provider, DispatchProp } from 'react-redux';
import { applyMiddleware, createStore, Dispatch } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer, { changeDate, updateList, StateInfo } from './../../reducer/user/detail';
import { storeMiddleware } from './../../middleware';
import { Api } from './../../config';
import './../../style/user/detail.less';

export type UserPropsInfo = StateInfo & DispatchProp & {
}

export interface UserStateInfo {
}

const store = createStore(reducer, storeMiddleware);
const yestoday = moment().add(-1, 'days').format('YYYYMMDD');

class UserComp extends React.Component<UserPropsInfo, UserStateInfo> {
  constructor(props: UserPropsInfo & StateInfo ) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    this.props.dispatch<any>(updateList(this.props.formData));
  }

  onDateChange = (date: moment.Moment, dateString: string) => {
    this.props.dispatch(changeDate(date.format('YYYYMMDD')))
  }

  render() {
    const { data, formData } = this.props;

    return (
      <div className='test-user'>
        <DatePicker
          defaultValue={ moment(yestoday) }
          onChange={ this.onDateChange }
        />
      </div>
    );
  }
}

const User = connect((state: StateInfo) => {
    return state;
  }, (dispatch: any, ...others: any[]) => {
    return {
      dispatch
    }
  }
)(UserComp);

export default () => <Provider store={ store }>
  <User />
</Provider>
