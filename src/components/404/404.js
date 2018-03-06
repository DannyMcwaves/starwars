import React, { Component } from 'react';
import Header from '../lib/header';
import './404.scss';

export default class FourOhFour extends Component{

  render() {
    return (
      <Header>
        <div id='fof' className='text-center pt-3 pb-3'>
          404
        </div>
      </Header>
    )
  }

}