import React from 'react';
import Home from './home';
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
    wrapper = shallow(<Provider store={store}><Home/></Provider>);
  });

  it('check the length of component', () => {
    expect(wrapper.length).toEqual(1);
  })

});
