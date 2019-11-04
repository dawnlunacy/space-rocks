import * as actions from '../actions';
import mockCleanNeos from '../utils/mockData';

describe('actions', () => {

  describe('setNeos', () => {
    it('should have a type of SET_NEOS', () => {
      const result = actions.setNeos(mockCleanNeos);
      const expectedAction = {
        type: 'SET_NEOS',
        mockCleanNeos
      }
      expect(result).toEqual(expectedAction)
    })
  });

  describe('setTotalNeos', () => {
    it('should have a type of SET_TOTAL_NEOS' , () => {
      const totalNeos = 10;
      const result = actions.setTotalNeos(totalNeos);

      const expectedAction = {
        type: 'SET_TOTAL_NEOS',
        totalNeos
      }
    
    expect(result).toEqual(expectedAction)
    });
  });

  describe('setPrevWeek', () => {
    it('should have a type of SET_PREV_WEEK' , () => {
      const prevWeekFetchUrl = "http://www.neowsapp.com/rest/v1/feed?start_date=2019-10-24&end_date=2019-10-31&detailed=false&api_key=m98g3WmabopZXIZRCQ0HdHYrEwuHimuH8b8JjicA";
      const result = actions.setPrevWeek(prevWeekFetchUrl)

      const expectedAction = {
        type: 'SET_PREV_WEEK',
        prevWeekFetchUrl
      }
    
    expect(result).toEqual(expectedAction)
    });
  });

  describe('setNextWeek', () => {
    it('should have a type of SET_NEXT_WEEK' , () => {
      const nextWeekFetchUrl = "http://www.neowsapp.com/rest/v1/feed?start_date=2019-11-07&end_date=2019-11-14&detailed=false&api_key=m98g3WmabopZXIZRCQ0HdHYrEwuHimuH8b8JjicA";
      const result = actions.setNextWeek(nextWeekFetchUrl);

      const expectedAction = {
        type: 'SET_NEXT_WEEK',
        nextWeekFetchUrl
      }
    
    expect(result).toEqual(expectedAction)
    });
  });

  describe('updateLoading', () => {
    it('should have a type of UPDATE_LOADING' , () => {
      const bool = false;
      const result = actions.updateLoading(bool)

      const expectedAction = {
        type: 'UPDATE_LOADING',
        bool
      }
    
    expect(result).toEqual(expectedAction)
    });
  });

  // describe('setTotalNeos', () => {
  //   it('should have a type of ' , () => {

  //     const result = actions.

  //     const expectedAction = {
  //       type: ,

  //     }
    
  //   expect(result).toEqual(expectedAction)
  //   });
  // });

  // describe('setTotalNeos', () => {
  //   it('should have a type of ' , () => {

  //     const result = actions.

  //     const expectedAction = {
  //       type: ,

  //     }
    
  //   expect(result).toEqual(expectedAction)
  //   });
  // });

  // describe('setTotalNeos', () => {
  //   it('should have a type of ' , () => {

  //     const result = actions.

  //     const expectedAction = {
  //       type: ,

  //     }
    
  //   expect(result).toEqual(expectedAction)
  //   });
  // });






































});