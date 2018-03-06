/**
 * displays a list of properties of a particular species.
 * */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../lib/header';
import {Link} from 'react-router-dom';
import {getDataAndDispatchObject} from "../../js/creators";
import PropTypes from 'prop-types';

class Species extends Component {
  render() {
    let specie = this.props.specie;
    return (
      <Header history={this.props.history} name={specie.name}>
        <div id='details'>
          <table className='table'>
            <tbody>
            <tr>
              <td>Name</td>
              <td>{specie.name}</td>
            </tr>
            <tr>
              <td>Classification</td>
              <td>{specie.classification}</td>
            </tr>
            <tr>
              <td>Designation</td>
              <td>{specie.designation}</td>
            </tr>
            <tr>
              <td>Average Height</td>
              <td>{specie.average_height}</td>
            </tr>
            <tr>
              <td>Average Life Span</td>
              <td>{specie.average_lifespan}</td>
            </tr>
            <tr>
              <td>Eye Color</td>
              <td>{specie.eye_colors}</td>
            </tr>
            <tr>
              <td>Skin Color</td>
              <td>{specie.skin_colors}</td>
            </tr>
            <tr>
              <td>Hair Color</td>
              <td>{specie.hair_colors}</td>
            </tr>
            <tr>
              <td>Langauge</td>
              <td>{specie.language}</td>
            </tr>
            <tr>
              <td>Home World</td>
              <td><Link to={`/${specie.homeworld.split('/')[4]}/${specie.homeworld.split('/')[5]}`}>
                {specie.homeworld ? `${specie.homeworld.split('/')[4]} ${specie.homeworld.split('/')[5]}` : ''}
              </Link></td>
            </tr>
            <tr>
              <td>Movies</td>
              <td><ul>{specie.films.map((chr, index) => {
                let split = chr.split('/');
                return <li key={index}><Link title='click to get full details' to={'/'+split[4]+'/'+split[5]}>{split[4]+' '+split[5]}</Link></li>;
              })}</ul></td>
            </tr>
            <tr>
              <td>People</td>
              <td><ul>{specie.people.map((chr, index) => {
                let split = chr.split('/');
                return <li key={index}><Link title='click to get full details' to={'/'+split[4]+'/'+split[5]}>{split[4]+' '+split[5]}</Link></li>;
              })}</ul></td>
            </tr>
            <tr>
              <td>Created</td>
              <td>{specie.created}</td>
            </tr>
            <tr>
              <td>Modified</td>
              <td>{specie.edited}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </Header>
    );
  }

  componentDidMount() {
    this.props.dispatch(getDataAndDispatchObject(window.$, `https://swapi.co/api/species/${this.props.location.pathname.split('/')[2]}/`, 'SPECIES_ACTION'));
  }
}

Species.propTypes = {
  specie: PropTypes.object
};

// map the species state from the store to the prop of the species component.
const mapStateToProps = state => {
  return {
    specie : state.species
  }
};

export default connect(mapStateToProps)(Species)
