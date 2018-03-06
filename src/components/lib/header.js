/**
 * the generic view container of the that has the controller
 * for navigating back and forward and has the name of the current
 * being viewed.
 * */

import React, { Component } from 'react';
import {Col, WindowRow, GridFluid} from '../lib/containers';
import PropTypes from 'prop-types';

export default class Header extends Component {

  render(){
    return (
      <GridFluid>
        <WindowRow div={1.1} className='justify-content-center align-items-center animated fadeIn'>
          <Col xs={12}>
            <div className='ctrl'>
              <span onClick={() => {this.props.history.goBack()}} className=''> &lt; </span>
              <span onClick={() => {this.props.history.goForward()}} className=''> &gt; </span>
              <span className='pl-1'>{this.props.name}</span>
            </div>
            {this.props.children}
          </Col>
        </WindowRow>
      </GridFluid>
    )
  }

}

Header.propTypes = {
  history: PropTypes.object,
  children: PropTypes.element
};
