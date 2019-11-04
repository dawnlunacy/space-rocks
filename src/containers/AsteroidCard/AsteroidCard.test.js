import React from 'react';
import { shallow } from 'enzyme';
import { AsteroidCard, mapStateToProps} from '../AsteroidCard/AsteroidCard';
import { mockCleanNeo } from '../../utils/mockData';

describe('AsteroidCard', () => {
  let wrapper;


  beforeEach(() => {
    wrapper = shallow(<AsteroidCard
      neos={ mockCleanNeo }
      currentNeoDate='2019-11-03'
      id={"3879721"}
      name={"(2019 UL6)"}
      nasaUrl={"http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3879721"}
      isPotentiallyHazardous={false}
      estimatedDiameterMin={86.4052294554}
      estimatedDiamerMax={193.2079666738}
      closeApproachDate={"2019-11-07"}
      relativeVelocity={"17480.8945933894"}
      missEarthDistance={"10538462.9640548218"}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  
});