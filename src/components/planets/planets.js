/**
 * this displays a list of all the properties available
 * to a single planet.
 * */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../lib/header';
import {Link} from 'react-router-dom';
import {getDataAndDispatchObject} from "../../js/creators";
import PropTypes from 'prop-types';

class Planet extends Component {
  render() {
    let planet = this.props.planet;
    return (
      <Header history={this.props.history} name={planet.name}>
        <div id='details'>
          <table className='table'>
            <tbody>
            <tr>
              <td>Name</td>
              <td>{planet.name}</td>
            </tr>
            <tr>
              <td>Diameter</td>
              <td>{planet.diameter}</td>
            </tr>
            <tr>
              <td>Rotation Period</td>
              <td>{planet.rotation_period}</td>
            </tr>
            <tr>
              <td>Orbital Period</td>
              <td>{planet.orbital_period}</td>
            </tr>
            <tr>
              <td>Gravity</td>
              <td>{planet.gravity}</td>
            </tr>
            <tr>
              <td>Population</td>
              <td>{planet.population}</td>
            </tr>
            <tr>
              <td>Climate</td>
              <td>{planet.climate}</td>
            </tr>
            <tr>
              <td>Terrain</td>
              <td>{planet.terrain}</td>
            </tr>
            <tr>
              <td>Surface Water</td>
              <td>{planet.surface_water}</td>
            </tr>
            <tr>
              <td>Movies</td>
              <td><ul>{planet.films.map((chr, index) => {
                let split = chr.split('/');
                return <li key={index}><Link title='click to get full details' to={'/'+split[4]+'/'+split[5]}>{split[4]+' '+split[5]}</Link></li>;
              })}</ul></td>
            </tr>
            <tr>
              <td>Species</td>
              <td><ul>{planet.residents.map((chr, index) => {
                let split = chr.split('/');
                return <li key={index}><Link title='click to get full details' to={'/'+split[4]+'/'+split[5]}>{split[4]+' '+split[5]}</Link></li>;
              })}</ul></td>
            </tr>
            <tr>
              <td>Created</td>
              <td>{planet.created}</td>
            </tr>
            <tr>
              <td>Modified</td>
              <td>{planet.edited}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </Header>
    );
  }

  componentDidMount() {
    this.props.dispatch(getDataAndDispatchObject(window.$, `https://swapi.co/api/planets/${this.props.location.pathname.split('/')[2]}/`, 'PLANETS_ACTION'));
  }
}

Planet.propTypes = {
  planet: PropTypes.object
};

// maps the planet state from the store to the props of the planet component
const mapStateToProps = state => {
  return {
    planet : state.planets
  }
};

export default connect(mapStateToProps)(Planet)
