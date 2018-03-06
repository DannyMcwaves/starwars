/**
 * displays the properties of a person.
 * */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../lib/header';
import {Link} from 'react-router-dom';
import {getDataAndDispatchObject} from "../../js/creators";
import PropTypes from 'prop-types';

class People extends Component {
  render() {
    let people = this.props.people;
    return (
      <Header history={this.props.history} name={people.name}>
        <div id='details'>
          <table className='table'>
            <tbody>
            <tr>
              <td>Name</td>
              <td>{people.name}</td>
            </tr>
            <tr>
              <td>Date Of Birth</td>
              <td>{people.birth_year}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{people.gender}</td>
            </tr>
            <tr>
              <td>Eye Color</td>
              <td>{people.eye_color}</td>
            </tr>
            <tr>
              <td>Hair Color</td>
              <td>{people.hair_color}</td>
            </tr>
            <tr>
              <td>Home World</td>
              <td><Link to={`/${people.homeworld.split('/')[4]}/${people.homeworld.split('/')[5]}`}>
                {people.homeworld ? `${people.homeworld.split('/')[4]} ${people.homeworld.split('/')[5]}` : ''}
                </Link></td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{people.height}</td>
            </tr>
            <tr>
              <td>Skin Color</td>
              <td>{people.skin_color}</td>
            </tr>
            <tr>
              <td>Movies</td>
              <td><ul>{people.films.map((chr, index) => {
                let split = chr.split('/');
                return <li key={index}><Link title='click to get full details' to={'/'+split[4]+'/'+split[5]}>{split[4]+' '+split[5]}</Link></li>;
              })}</ul></td>
            </tr>
            <tr>
              <td>Species</td>
              <td><ul>{people.species.map((chr, index) => {
                let split = chr.split('/');
                return <li key={index}><Link title='click to get full details' to={'/'+split[4]+'/'+split[5]}>{split[4]+' '+split[5]}</Link></li>;
              })}</ul></td>
            </tr>
            <tr>
              <td>Starships</td>
              <td><ul>{people.starships.map((chr, index) => {
                let split = chr.split('/');
                return <li key={index}><Link title='click to get full details' to={'/'+split[4]+'/'+split[5]}>{split[4]+' '+split[5]}</Link></li>;
              })}</ul></td>
            </tr>
            <tr>
              <td>Vehicles</td>
              <td><ul>{people.vehicles.map((chr, index) => {
                let split = chr.split('/');
                return <li key={index}><Link title='click to get full details' to={'/'+split[4]+'/'+split[5]}>{split[4]+' '+split[5]}</Link></li>;
              })}</ul></td>
            </tr>
            <tr>
              <td>Created</td>
              <td>{people.created}</td>
            </tr>
            <tr>
              <td>Modified</td>
              <td>{people.edited}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </Header>
    );
  }

  componentDidMount() {
    this.props.dispatch(getDataAndDispatchObject(window.$, `https://swapi.co/api/people/${this.props.location.pathname.split('/')[2]}/`, 'PEOPLE_ACTION'));
  }
}

People.propTypes = {
  people: PropTypes.object
};

// maps the people state from the store to the props of the people component.
const mapStateToProps = state => {
  return {
    people : state.people
  }
};

export default connect(mapStateToProps)(People)
