import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { fetchAPOD, fetchNEO } from '../../utils/apiCalls';
import { mockUnfilteredApodResponse } from '../../utils/mockData';
import { mockNeoDataUnfiltered } from '../../utils/mockNeoDataUnfiltered';
// import { formatDateForFetch, findEndOfWeek, cleanNeoData } from '../../utils/helpers';
import { findDay, cleanNeoData } from '../../utils/helpers';
import { setNeos, setTotalNeos, setPrevWeek, setNextWeek, updateLoading, setCurrentNeoDate, setStartDate, setApod, handleError } from '../../actions';
import { mockCleanNeos } from '../../utils/mockData';


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

  describe('mapStateToProps', () => {
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
    });
  });
  
  describe('mapDispatchToProps', () => {
    it('should call dispatch with a setNeos action when saveNeosHelper is called', () => {
      const mockDispatch = jest.fn();
      const mockResponse = mockCleanNeos;

      const actionToDispatch = setNeos(mockResponse);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setNeos(mockResponse);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call dispatch with a setTotalNeos action when saveNeosHelper is called', () => {
      const mockDispatch = jest.fn();
      const mockResponse = 20

      const actionToDispatch = setTotalNeos(mockResponse);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setTotalNeos(mockResponse);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call dispatch with a setPrevWeek action when saveNeosHelper is called', () => {
      const mockDispatch = jest.fn();
      const mockResponse = 'url'

      const actionToDispatch = setPrevWeek(mockResponse);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setPrevWeek(mockResponse);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call dispatch with a setNextWeek action when saveNeosHelper is called', () => {
      const mockDispatch = jest.fn();
      const mockResponse = 'urlFuture'

      const actionToDispatch = setNextWeek(mockResponse);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setNextWeek(mockResponse);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call dispatch with a updateLoading action when saveNeosHelper is called', () => {
      const mockDispatch = jest.fn();
      const mockResponse = false

      const actionToDispatch = updateLoading(mockResponse);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.isLoadingNeos(mockResponse);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call dispatch with a setCurrentNeoDate action when displayDateSelectedNeos is called', () => {
      const mockDispatch = jest.fn();
      const mockResponse = '2019-11-08'

      const actionToDispatch = setCurrentNeoDate(mockResponse);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setCurrentNeoDate(mockResponse);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call dispatch with a setStartDate action when startDateHelper is called', () => {
      const mockDispatch = jest.fn();
      const mockResponse = '2019-12-21'

      const actionToDispatch = setStartDate(mockResponse);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setStartDate(mockResponse);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call dispatch with a setApod action when getApod is called', () => {
      const mockDispatch = jest.fn();
      const backgroundImg = 'https:wwww.APOD.com'
      const mockResponse =  {
        backgroundImage:`url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }

      const actionToDispatch = setApod(mockResponse);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setApod(mockResponse);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call dispatch with a handleError action when saveNeosHelper is called and a bad reponse is recieved from fetch', () => {
      const mockDispatch = jest.fn()
      const mockResponse =  "ERROR FETCHING"

      const actionToDispatch = handleError(mockResponse);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.handleError(mockResponse);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  });
});


