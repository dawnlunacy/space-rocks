import React from 'react';
import { shallow } from 'enzyme';
import { AsteroidContainer, mapStateToProps } from './AsteroidContainer';
import { mockApod, mockCleanNeos} from '../../utils/mockData';

describe('AsteroidContainer', () => {
  let wrapper;
  
  const mockStartDateHelper = jest.fn();
  const mockDisplayDateSelectedNeos = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<AsteroidContainer 
    apod={mockApod}
    currentNeoDate={'2019-11-07'}
    startDate={'2019-11-03'}
    neos={mockCleanNeos}
    displayDateSelectedNeos={mockDisplayDateSelectedNeos}
    startDateHelper={mockStartDateHelper}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});