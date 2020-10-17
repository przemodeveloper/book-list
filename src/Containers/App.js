import React, { Component } from 'react';
import classes from './App.module.css';
import ShowDetails from '../Components/ShowDetails/ShowDetails';
import Home from '../Components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/book/:id" component={ShowDetails} />
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App;
