import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import ExamInfo from './components/ExamInfo';
import history from './services/historyService';
import { Router, Switch, Route } from "react-router-dom";

const routing = (
  <div>
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
