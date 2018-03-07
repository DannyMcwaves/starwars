/**
 * this is the class for one particular film.
 * it displays the properties of the film
 * */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../lib/header';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Film extends Component {
  render() {
    return (
      <Header history={this.props.history} name={this.props.film[0].title}>
        <div id='details'>
          {this.props.film.map((film, index) => (
            <table key={index} className='table'>
              <tbody>
              <tr>
                <td>Title</td>
                <td>{film.title}</td>
              </tr>
              <tr>
                <td>Director</td>
                <td>{film.director}</td>
              </tr>
              <tr>
                <td>Producer</td>
                <td>{film.producer}</td>
              </tr>
              <tr>
                <td>Release Date</td>
                <td>{film.release_date}</td>
              </tr>
              <tr>
                <td>Opening Crawl</td>
                <td>{film.opening_crawl}</td>
              </tr>
              <tr>
                <td>Characters</td>
                <td><ul>{film.characters.map((chr, index) => {
                  let split = chr.split('/');
                  return <li key={index}><Link title='click to get full details' to={'/'+split[4]+'/'+split[5]}>{'character '+split[5]}</Link></li>;
                })}</ul></td>
              </tr>
              <tr>
                <td>Planets</td>
                <td><ul>{film.planets.map((chr, index) => {
                  let split = chr.split('/');
                  return <li key={index}><Link title='click to get full details' to={'/'+split[4]+'/'+split[5]}>{split[4]+' '+split[5]}</Link></li>;
                })}</ul></td>
              </tr>
              <tr>
                <td>Starships</td>
                <td><ul>{film.starships.map((chr, index) => {
                  let split = chr.split('/');
                  return <li key={index}><Link title='click to get full details' to={'/'+split[4]+'/'+split[5]}>{split[4]+' '+split[5]}</Link></li>;
                })}</ul></td>
              </tr>
              <tr>
                <td>Vehicles</td>
                <td><ul>{film.vehicles.map((chr, index) => {
                  let split = chr.split('/');
                  return <li key={index}><Link title='click to get full details' to={'/'+split[4]+'/'+split[5]}>{split[4]+' '+split[5]}</Link></li>;
                })}</ul></td>
              </tr>
              <tr>
                <td>Species</td>
                <td><ul>{film.species.map((chr, index) => {
                  let split = chr.split('/');
                  return <li key={index}><Link title='click to get full details' to={'/'+split[4]+'/'+split[5]}>{split[4]+' '+split[5]}</Link></li>;
                })}</ul></td>
              </tr>
              <tr>
                <td>Created</td>
                <td>{film.created}</td>
              </tr>
              <tr>
                <td>Modified</td>
                <td>{film.edited}</td>
              </tr>
              </tbody>
            </table>
          ))}
        </div>
      </Header>
    );
  }
}

Film.propTypes = {
  film: PropTypes.array
};

const mapStateToProps = state => {
  // get the id of the film corresponding to the current window path.
  let id = parseInt(window.location.pathname.split('/')[2], 10);
  return {
    film : state.films.filter(film => film.episode_id === id)
  }
};

export default connect(mapStateToProps)(Film)
