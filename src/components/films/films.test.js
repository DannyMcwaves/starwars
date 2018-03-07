import React from 'react';
import Films from './films';
import {Provider} from 'react-redux';
import configStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

import {mount} from 'enzyme';

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
    wrapper = mount(<Provider store={store}><Films/></Provider>);
  });

  it('inspect prop of film', () => {
    expect(wrapper.props().store.getState().films instanceof Array).toBeTruthy();
  });

  it('contains a specific element', () => {
    expect(wrapper.contains(<th>Title</th>)).toBe(true);
  })
});
