import React from 'react';
import FourOhFour from './404';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

import {mount} from 'enzyme';

describe('deep mount and test component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<FourOhFour />);
  });

  it('inspect prop of film', () => {
    expect(wrapper.find(FourOhFour)).toBeTruthy();
  });

  it('should find div element containing 404', () => {
    expect(wrapper.contains(<div id='fof' className='text-center pt-3 pb-3'>404</div>));
  });

  it('contains one outer element', () => {
    expect(wrapper.length).toEqual(1);
  });
});
