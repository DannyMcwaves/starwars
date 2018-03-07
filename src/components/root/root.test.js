import React from 'react';
import Root from './root';
import configStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

import {mount} from 'enzyme';

describe('<Root/>', () => {

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
    wrapper = mount(<Provider store={store}><Root/></Provider>);
  });

  it('check the length of component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('find the div that houses the routes', () => {
    expect(wrapper.first('div#homepage').length).toEqual(1)
  });

});
