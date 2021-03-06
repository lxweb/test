import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';
import Login from './components/Login/Login';

import TaskDetail from './components/TaskDetail/TaskDetail';

import './styles/styles.scss';

render((
  <Router history={ history }>
    <React.Fragment>
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/task/:tid" component={TaskDetail}/>
          <Route component={NotFound}/>
        </Switch>
      </App>
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>
), document.getElementById('app'));
