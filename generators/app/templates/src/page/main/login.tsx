import * as React from 'react';
import * as ReactDom from 'react-dom';

export interface LoginPropsInfo {

}

export interface LoginStateInfo {

}

export default class Login extends React.Component<LoginPropsInfo, LoginStateInfo> {
  constructor(props: LoginPropsInfo) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className='admin-login'>
        <h1 className="title">Login.</h1>
      </div>
    );
  }
}
