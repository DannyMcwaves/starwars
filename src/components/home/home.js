/**
 * The home component defines the routes for app.
 * the index/default route is the collection of all films.
 * and the rest of the routes follows paths as requested
 * this is connected to the react store using redux.
 * */

import React, { Component } from 'react';
import {Col, WindowRow} from '../lib/containers';
import {connect} from 'react-redux';
import {Link, Route, Switch} from 'react-router-dom';
import Films from '../films/films';
import Film from '../film/film';
import People from '../people/people';
import Planet from '../planets/planets';
import Specie from '../species/species';
import Vehicle from '../vehicles/vehicles';
import Starship from '../starships/starships';
import FourOhFour from '../404/404';
import './home.scss';

class Homepage extends Component {

  render() {
    return (
      <WindowRow id='main' className="justify-content-end">
        <Col xs={12} sm={12} md={2} id='content' className='pt-3'>
          <Link to='/'>
            <div className='text-center text-md-left'><span> STAR WARS API </span></div>
          </Link>
        </Col>
        <Col xs={12} sm={12} md={10} id='data' className='pt-3'>
          <Switch>
            <Route exact path='/' component={Films} />
            <Route path='/films/:id' component={Film} />
            <Route path='/people/:id' component={People} />
            <Route path='/starships/:id' component={Starship} />
            <Route path='/vehicles/:id' component={Vehicle} />
            <Route path='/species/:id' component={Specie} />
            <Route path='/planets/:id' component={Planet} />
            <Route component={FourOhFour}/>
          </Switch>
        </Col>
      </WindowRow>
    )
  }

}

export default connect()(Homepage);
