/**
 *
 */
import * as React from 'react';
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

import { ExceptionCodes } from './../..';

const forbiddenImage = require('./../../../static/image/exception/forbidden.svg');
const notFoundImage = require('./../../../static/image/exception/not-found.svg');
const serverErrorImage = require('./../../../static/image/exception/server-error.svg');

import './../../style/main/exception.less';

export interface ExceptionPropsInfo {
  status: ExceptionCodes
}

export interface ExceptionStateInfo {
}

const ExceptionCodeMapping = {
  403: {
    image: forbiddenImage,
    desc: '抱歉，你无权访问该页面'
  },
  404: {
    image: notFoundImage,
    desc: '抱歉，你访问的页面不存在'
  },
  500: {
    image: serverErrorImage,
    desc: '抱歉，服务器出错了'
  }
};

export default class Exception extends React.Component<ExceptionPropsInfo, ExceptionStateInfo> {
  state: ExceptionStateInfo;
  constructor(props: ExceptionPropsInfo) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { status } = this.props;
    const { image, desc } = ExceptionCodeMapping[status || ExceptionCodes.notFound];

    return (
      <div className='admin-exception'>
        <img src={ image } />
        <div className='exception-content'>
          <h1>{ status || ExceptionCodes.notFound  }</h1>
          <h3 className='font-bold'>{ desc }</h3>
          <Link to='/'>
            <Button type={ 'primary' }><span>返回首页</span></Button>
          </Link>
        </div>
      </div>
    );
  }
}
