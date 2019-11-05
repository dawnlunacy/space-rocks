import React from 'react';
import { shallow } from 'enzyme';
import { AsteroidDateCard } from '../AstroidDateCard/AsteroidDateCard';
import { mockCleanNeos } from '../../utils/mockData';

describe('AsteroidDateContainer', () => {
  let wrapper;

  const mockDisplayDateSelectedNeos = jest.fn();
  
  beforeEach(() => {
    wrapper = shallow(<AsteroidDateCard
      neos={mockCleanNeos} 
      currentNeoDate={'2019-11-07'}
      date={'2019-11-04'}
      totalNeosOnDate={27}
      displayDateSelectedNeos={mockDisplayDateSelectedNeos}
    />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call displayDateSelectedNeos with an event when clicked', () => {
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.find('button').simulate('click', mockEvent);
    
    expect(mockDisplayDateSelectedNeos).toHaveBeenCalledWith(mockEvent);
  });
});