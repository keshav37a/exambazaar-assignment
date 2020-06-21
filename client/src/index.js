import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import ExamInfo from './components/ExamInfo';
import RandomQuestion from './components/RandomQuestion';
import Header from './components/Header';
import history from './services/historyService';
import { Router, Switch, Route } from "react-router-dom";

const routing = (
  <div>
    <Header></Header>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={ExamInfo} />
        <Route exact path="/random-question" component={RandomQuestion} />
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
