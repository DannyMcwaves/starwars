import React from 'react';
import render from 'react-test-renderer';
import App from './app';
import {Provider} from 'react-redux';
import configStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

import {shallow} from 'enzyme';

test('renders and tests for the App', () => {
  let state = {
    loadState: 'NOT_LOADING',
    films: [{}],
    people: {},
    vehicles: {},
    starships: {},
    planets: {},
    species: {}};
  let mockstore = configStore([thunk]);
  let store = mockstore(state);
  let component = render.create(<Provider store={store}><App/></Provider>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


describe('shallow render react components', () => {

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
    wrapper = shallow(<Provider store={store}><App/></Provider>);
  });

  it('check the length of the component', () => {
    expect(wrapper.length).toEqual(1);
  })

});
