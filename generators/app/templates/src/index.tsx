import * as React from 'react';
import * as ReactDom from 'react-dom';
import { createBrowserHistory, History } from 'history';
import {
  Link,
  Route,
  RouteProps,
  Router,
  Switch,
  Redirect
} from 'react-router-dom';
import * as Loadable from 'react-loadable';

import { Layout } from './page/layout';
import { ContentLoading } from './component/loading/content-loading';
import { initApi } from './config';

export enum ExceptionCodes {
  forbidden = 403,
  notFound = 404,
  internalServerError = 500
};

const Login = Loadable({
  loader: () => import(/* webpackChunkName: 'login' */ './page/main/login'),
  loading: () => null
});
const Register = Loadable({
  loader: () => import(/* webpackChunkName: 'register' */ './page/main/register'),
  loading: () => null
});
const User = Loadable({
  loader: () => import(/* webpackChunkName: 'user' */ './page/test/detail'),
  loading: ContentLoading
});
const Exception = Loadable({
  loader: () => import(/* webpackChunkName: 'exception' */ './page/main/exception'),
  loading: ContentLoading
});


import "./style/index.less";
import Dashboard from './page/dashboard';

interface HomePropsInfo {
}

interface HomeStateInfo {
}

const history = createBrowserHistory();

class Home extends React.Component<HomePropsInfo, HomeStateInfo> {
  constructor(props: HomePropsInfo) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    initApi();
  }

  render() {

    return (
      <Router history={ history }>
        <Switch>
          <Route exact path='/login' component={ Login }/>
          <Route exact path='/register' component={ Register }/>
          <Route path='/'
            render={ props => <Layout
              match={ props }
              content={<Switch>
                <Route exact path='/' component={ Dashboard } />
                <Redirect exact from='/' to='/skill-lab/feedback' />
                <Route exact path='/users' component={ User } />

                <Route exact path='/403' render={ () => <Exception status={ ExceptionCodes.forbidden } /> } />
                <Route exact path='/404' render={ () => <Exception status={ ExceptionCodes.notFound } /> } />
                <Route exact path='/500' render={ () => <Exception status={ ExceptionCodes.internalServerError } /> } />
                <Redirect push={ false } to={{ pathname: '/404'}}/>
              </Switch>}
            />}
          />
        </Switch>
      </Router>
    );
  }
}

ReactDom.render(<Home />, document.getElementById('content'));
