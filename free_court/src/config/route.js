import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    Main,
    NoMatch
} from '../pages';

const AppNavigator = () => (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
);

export { AppNavigator };
