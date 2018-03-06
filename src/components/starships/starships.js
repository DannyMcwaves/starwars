/**
 * display the properties available to a specific specie.
 * */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../lib/header';
import {Link} from 'react-router-dom';
import {getDataAndDispatchObject} from "../../js/creators";
import PropTypes from 'prop-types';

class StarShip extends Component {
  render() {
    let starship = this.props.starship;
    return (
      <Header history={this.props.history} name={starship.name}>
        <div id='details'>
          <table className='table'>
            <tbody>
            <tr>
              <td>Name</td>
              <td>{starship.name}</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>{starship.model}</td>
            </tr>
            <tr>
              <td>Manufacturer</td>
              <td>{starship.manufacturer}</td>
            </tr>
            <tr>
              <td>Starship Class</td>
              <td>{starship.starship_class}</td>
            </tr>
            <tr>
              <td>Cost In Credit</td>
              <td>{starship.cost_in_credits}</td>
            </tr>
            <tr>
              <td>Length</td>
              <td>{starship.length}</td>
            </tr>
            <tr>
              <td>Crew</td>
              <td>{starship.crew}</td>
            </tr>
            <tr>
              <td>Passengers</td>
              <td>{starship.passengers}</td>
            </tr>
            <tr>
              <td>Max Speed</td>
              <td>{starship.max_atmosphering_speed}</td>
            </tr>
            <tr>
              <td>MGLT</td>
              <td>{starship.MGLT}</td>
            </tr>
            <tr>
              <td>Cargo Capacity</td>
              <td>{starship.cargo_capacity}</td>
            </tr>
            <tr>
              <td>Consumables</td>
              <td>{starship.consumables}</td>
            </tr>
            <tr>
              <td>Hyperdrive Rating</td>
              <td>{starship.hyperdrive_rating}</td>
            </tr>
            <tr>
              <td>Movies</td>
              <td><ul>{starship.films.map((chr, index) => {
                let split = chr.split('/');
                return <li key={index}><Link title='click to get full details' to={'/'+split[4]+'/'+split[5]}>{split[4]+' '+split[5]}</Link></li>;
              })}</ul></td>
            </tr>
            <tr>
              <td>Pilots</td>
              <td><ul>{starship.pilots.map((chr, index) => {
                let split = chr.split('/');
                return <li key={index}><Link title='click to get full details' to={'/'+split[4]+'/'+split[5]}>{split[4]+' '+split[5]}</Link></li>;
              })}</ul></td>
            </tr>
            <tr>
              <td>Created</td>
              <td>{starship.created}</td>
            </tr>
            <tr>
              <td>Modified</td>
              <td>{starship.edited}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </Header>
    );
  }

  componentDidMount() {
    this.props.dispatch(getDataAndDispatchObject(window.$, `https://swapi.co/api/starships/${this.props.location.pathname.split('/')[2]}/`, 'STARSHIPS_ACTION'));
  }
}

StarShip.propTypes = {
  starship: PropTypes.object
};

// map the starship state from the store to the props of the starship component
const mapStateToProps = state => {
  return {
    starship : state.starships
  }
};

export default connect(mapStateToProps)(StarShip)
