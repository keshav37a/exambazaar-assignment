import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import App from './components/App';
import ExamInfo from './components/ExamInfo';
import Header from './components/Header';
import history from './services/historyService';
import { Router, Switch, Route } from "react-router-dom";

const routing = (
  <div>
    <Header></Header>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={ExamInfo} />
      </Switch>
    </Router>
  </div>
)


ReactDOM.render(
    <React.StrictMode>
      {routing}
    </React.StrictMode>,
  document.getElementById('root')
);
