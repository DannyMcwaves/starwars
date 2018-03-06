import React from 'react';
import render from 'react-test-renderer';
import App from './App';

test('renders without crashing', () => {
  let component = render.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
