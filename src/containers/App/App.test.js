import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { fetchAPOD, fetchNEO } from '../../utils/apiCalls';

jest.mock('../../utils/apiCalls');

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the snapshots', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
