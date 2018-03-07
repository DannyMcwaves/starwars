import React from 'react';
import render from 'react-test-renderer';
import Header from './header';

test('renders without crashing', () => {
  let component = render.create(<Header history={{back:true}}><div>this is real</div></Header>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
