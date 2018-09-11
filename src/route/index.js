//路由配置文件

import React from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import { IndexRoute,Route, Redirect } from 'react-router'
import createHistory from 'history/createBrowserHistory';
import Layout from '../layout/index';
import Login from '../page/login/index';
import Register from '../page/register/register';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as authAction from '../actions/auth'

const history = createHistory();
const location = history.location;

// const { auth } = this.props;

const routes = (
    <HashRouter>
        <Switch>
            <Route exact path="/" render={() => false ? <Redirect to="/app/index" push /> : <Redirect to="/login" push /> } />
            <Route path="/app" component={Layout} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register}/>
        </Switch>
    </HashRouter>
);

// function routes(props, /* context */) {
//   return 
//     <HashRouter>
//       <Switch>
//         <Route exact path="/" render={() => props.auth.isAuthenticated ? <Redirect to="/app/index" push /> : <Redirect to="/login" push />} />        
//         <Route path="/app" component={Layout} />
//         <Route path="/login" component={Login} />
//       </Switch>
//     </HashRouter>
// }

const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
    authAction: bindActionCreators(authAction, dispatch),
    dispatch: dispatch
});

export default routes;