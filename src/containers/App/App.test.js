import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { fetchAPOD, fetchNEO } from '../../utils/apiCalls';
import { mockUnfilteredApodResponse } from '../../utils/mockData';
import { mockNeoDataUnfiltered } from '../../utils/mockNeoDataUnfiltered';
// import { formatDateForFetch, findEndOfWeek, cleanNeoData } from '../../utils/helpers';
import { findDay } from '../../utils/helpers';

jest.mock('../../utils/apiCalls');
// jest.mock('../../utils/helpers');

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
  const mockFindEndOfWeek = jest.fn();
  const mockHandleError = jest.fn();
  

  fetchAPOD.mockImplementation(() => Promise.resolve(mockUnfilteredApodResponse));
  fetchNEO.mockImplementation(() => Promise.resolve(mockNeoDataUnfiltered));

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
      handleError={mockHandleError}

      />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call the correct methods when saveNeosHelper', () => {
    const mockStartDate = '2019-11-03';
    const mockEndDate = '2019-11-10';
    wrapper.instance().findEndOfWeek = jest.fn()

     wrapper.instance().saveNeosHelper(mockStartDate);
    expect(wrapper.instance().findEndOfWeek).toHaveBeenCalled()
    expect(wrapper.instance().findEndOfWeek).toHaveBeenCalledWith(mockStartDate)
  })

  it('should return an object with loading and error info', () => {
    const mockLoading = false;
    const mockErrorMessage = "Error loading, please try again"
    const mockState = {
      loadingNeos: false,
      errorMessage: "Error loading, please try again"
    }

    const expected = {
      loadingNeos: mockLoading,
      errorMessage: mockErrorMessage
    }

    const mappedProps = mapStateToProps(mockState);
    
    expect(mappedProps).toEqual(expected)
  })
});
