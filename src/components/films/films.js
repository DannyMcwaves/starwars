/**
 * the films component that displays a list of all the movies
 * available from the star wars API.
 * */


import React, { Component } from 'react';
import './films.scss';
import {connect} from 'react-redux';
import Header from '../lib/header';
import {getDataAndDispatch} from "../../js/creators";
import PropTypes from 'prop-types';

class Films extends Component {
  render() {
    return (
      <Header history={this.props.history} name='Star Wars Films'>
        <table className='table table table-hover table-striped'>
          <thead>
            <tr className='head'>
              <th>Title</th>
              <th>Director</th>
              <th className='d-none d-sm-block'>Release Date</th>
              <th>Producer</th>
            </tr>
          </thead>
          <tbody>
            {this.props.films.map((film, index) => (
              <tr key={index} onClick={(e) => {this.props.history.push(`/films/${film.episode_id}`)}}>
                <td>{film.title}</td>
                <td>{film.director}</td>
                <td className='d-none d-sm-block'>{film.release_date}</td>
                <td>{film.producer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Header>
    );
  }

  componentDidMount() {
    // if there is no film available, get all the films from the star wars api.
    if (this.props.films.length === 0) {
      this.props.dispatch(getDataAndDispatch(window.$, 'https://swapi.co/api/films/'));
    }
  }
}

Films.propTypes = {
  films: PropTypes.array,
};

// map the films state to the prop of the component.
const mapStateToProps = state => {
  return {
    films : state.films
  }
};

// connect the component to the redux store.
export default connect(mapStateToProps)(Films)
