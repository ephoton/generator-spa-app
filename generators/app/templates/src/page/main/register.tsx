import * as React from 'react';
import * as ReactDom from 'react-dom';

export interface RegisterPropsInfo {

}

export interface RegisterStateInfo {

}

export default class Register extends React.Component<RegisterPropsInfo, RegisterStateInfo> {
  constructor(props: RegisterPropsInfo) {
    super(props);

    this.state = {
    };
  }

  handleClick(){
    console.log('Hello!');
  }

  render() {
    return (
      <div className='admin-register'>
        <h1 className="title">Register</h1>
      </div>
    );
  }
}
