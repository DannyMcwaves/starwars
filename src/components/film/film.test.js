import React from 'react';
import Film from './film';
import Header from '../lib/header';
import {Provider} from 'react-redux';
import configStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

import {shallow} from 'enzyme';

describe('deep mount and test component', () => {

  let wrapper, state = {
      loadState: 'NOT_LOADING',
      films: [{}],
      people: {},
      vehicles: {},
      starships: {},
      planets: {},
      species: {}
    },
    store = configStore([thunk])(state);

  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><Film /></Provider>);
  });

  it('inspect prop of film', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('contains a specific element', () => {
    expect(wrapper.find(Header).length).toEqual(0);
  });

  it('has the Film component', () => {
    expect(wrapper.find(Film).length).toEqual(1);
  });
});
