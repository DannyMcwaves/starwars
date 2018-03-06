/**
 * display the properties of a specific vehicle
 * */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../lib/header';
import {Link} from 'react-router-dom';
import {getDataAndDispatchObject} from "../../js/creators";
import PropTypes from 'prop-types';

class Vehicle extends Component {
  render() {
    let vehicle = this.props.vehicle;
    return (
      <Header history={this.props.history} name={vehicle.name}>
        <div id='details'>
          <table className='table'>
            <tbody>
            <tr>
              <td>Name</td>
              <td>{vehicle.name}</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>{vehicle.model}</td>
            </tr>
            <tr>
              <td>Manufacturer</td>
              <td>{vehicle.manufacturer}</td>
            </tr>
            <tr>
              <td>Starship Class</td>
              <td>{vehicle.vehicle_class}</td>
            </tr>
            <tr>
              <td>Cost In Credit</td>
              <td>{vehicle.cost_in_credits}</td>
            </tr>
            <tr>
              <td>Length</td>
              <td>{vehicle.length}</td>
            </tr>
            <tr>
              <td>Crew</td>
              <td>{vehicle.crew}</td>
            </tr>
            <tr>
              <td>Passengers</td>
              <td>{vehicle.passengers}</td>
            </tr>
            <tr>
              <td>Max Speed</td>
              <td>{vehicle.max_atmosphering_speed}</td>
            </tr>
            <tr>
              <td>Cargo Capacity</td>
              <td>{vehicle.cargo_capacity}</td>
            </tr>
            <tr>
              <td>Consumables</td>
              <td>{vehicle.consumables}</td>
            </tr>
            <tr>
              <td>Movies</td>
              <td><ul>{vehicle.films.map((chr, index) => {
                let split = chr.split('/');
                return <li key={index}><Link title='click to get full details' to={'/'+split[4]+'/'+split[5]}>{split[4]+' '+split[5]}</Link></li>;
              })}</ul></td>
            </tr>
            <tr>
              <td>Pilots</td>
              <td><ul>{vehicle.pilots.map((chr, index) => {
                let split = chr.split('/');
                return <li key={index}><Link title='click to get full details' to={'/'+split[4]+'/'+split[5]}>{split[4]+' '+split[5]}</Link></li>;
              })}</ul></td>
            </tr>
            <tr>
              <td>Created</td>
              <td>{vehicle.created}</td>
            </tr>
            <tr>
              <td>Modified</td>
              <td>{vehicle.edited}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </Header>
    );
  }

  componentDidMount() {
    this.props.dispatch(getDataAndDispatchObject(window.$, `https://swapi.co/api/vehicles/${this.props.location.pathname.split('/')[2]}/`, 'VEHICLE_ACTION'));
  }
}

Vehicle.propTypes = {
  vehicle: PropTypes.object
};

// map the vehicles state from the store to the props of the vehicle component.
const mapStateToProps = state => {
  return {
    vehicle : state.vehicles
  }
};

export default connect(mapStateToProps)(Vehicle)
