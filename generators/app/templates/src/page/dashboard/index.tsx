import * as React from 'react';
import * as ReactDom from 'react-dom';

// import './../../style/dashboard/index.less';

export interface DashboardPropsInfo {

}

export interface DashboardStateInfo {

}

export default class Dashboard extends React.Component<DashboardPropsInfo, DashboardStateInfo> {
  constructor(props: DashboardPropsInfo) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className='main'>
        <h1 className="title">Dashboard</h1>
      </div>
    );
  }
}
