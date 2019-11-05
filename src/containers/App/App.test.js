import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { fetchAPOD, fetchNEO } from '../../utils/apiCalls';

jest.mock('../../utils/apiCalls');

describe('App', () => {
  let wrapper;
  const mockSetNeos = jest.fn();
  const mockSetTotalNeos = jest.fn();
  const mockSetPrevWeek = jest.fn();
  const mockSetNextWeek = jest.fn();
  const mockIsLoadingNeos = jest.fn();
  const mockSetCurrentNeoData = jest.fn();
  const mockSetStartDate = jest.fn();
  const mockSetApod = jest.fn();


  beforeEach(() => {
    wrapper = shallow(<App 
      loadingNeos={true}
      setNeos={mockSetNeos}
      setTotalNeps={mockSetTotalNeos}
      setPrevWeek={mockSetPrevWeek}
      setNextWeek={mockSetNextWeek}
      isLoadingNeos={mockIsLoadingNeos}
      setCurrentNeoDate={mockSetCurrentNeoData}
      setStartDate={mockSetStartDate}
      setApod={mockSetApod}
      />);

  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call getApod and saveNeosHelper after mounting', () => {
    wrapper.instance().getApod = jest.fn();
    // wrapper.instance().forceUpdate();
    // wrapper.instance().saveNeosHelper = jest.fn();

    expect(wrapper.instance().getApod).toHaveBeenCalled()
  });


});
