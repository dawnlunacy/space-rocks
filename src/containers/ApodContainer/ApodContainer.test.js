import React from 'react';
import { ApodContainer } from './ApodContainer';
import { shallow } from 'enzyme';

describe('ApodContainer', () => {
  let wrapper;

  const mockApod = {}

  beforeEach(() => {
    wrapper = shallow(<ApodContainer 
    apod={ mockApod }
      />)
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});
