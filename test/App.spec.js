import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/App';


describe('App', () => {
  it('should render without error', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.main__container').exists()).toBe(true);
  });
  test('that the Footer component is rendered', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer').length).toBe(1);
  });
});
