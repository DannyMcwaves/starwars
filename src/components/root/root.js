/**
 * setting up routes that renders a component
 * when matched.
 * the default and any pages after it matched homepage.
 * if no route id specified, display the 404 component.
 * */


import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from '../home/home';
import FourOhFour from '../404/404';


class Root extends Component {
    render() {
        return (
          <Router>
            <div id='homepage'>
              <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route path='/:pages' component={Homepage}/>
                <Route component={FourOhFour}/>
              </Switch>
            </div>
          </Router>
        )
    }
}

export default Root;
