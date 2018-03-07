import React from 'react';
import Planet from './planets';
import {Provider} from 'react-redux';
import configStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import {shallow} from 'enzyme';

describe('<Planet />', () => {

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
    wrapper = shallow(<Provider store={store}><Planet /></Provider>);
  });

  it('the length of the component should be one', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('props passed to component should be object', () => {
    expect(typeof wrapper.props() === 'object').toBe(true);
  });

  it('asserts the presence of the div#detail element', () => {
    expect(wrapper.first('div').length === 1).toBe(true);
  });

});
