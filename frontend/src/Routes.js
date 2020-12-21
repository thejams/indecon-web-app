import React, { Component } from 'react'
import Menu from '../src/components/Menu'
import Latest from './components/Latest'
import Element from './components/Element'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <Router basename="/home/">
        <div>
          <Switch>
            <Route path="/latest">
              <Latest />
            </Route>
            <Route path="/element">
              <Element />
            </Route>
            <Route path="/">
              <Menu />
            </Route>
          </Switch>
        </div>
    </Router>
    )
  }

}

export default Routes