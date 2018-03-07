import React from 'react';
import People from './people';
import {Provider} from 'react-redux';
import configStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import {shallow} from 'enzyme';

describe('<People/>', () => {

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
    wrapper = shallow(<Provider store={store}><People /></Provider>);
  });

  it('inspect prop of film', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('does not contain a people class', () => {
    expect(wrapper.is('.people')).toBe(false);
  });

  it('asserts the presence of the div#detail element', () => {
    expect(wrapper.first('div').length === 1).toBe(true);
  });

});
