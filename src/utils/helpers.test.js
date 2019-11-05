import helpers from './helpers';
import { findTodaysDate } from './helpers'

describe('helpers', () => {
  describe('findTodaysDate', () => {
    it('should format a date formatted as yyyy/mm/dd', () => {
      const mockDay = '2019-11-04';
      const expectedResponse = '2019/11/04';

      const mockAction = findTodaysDate(mockDay);
      expect(mockAction).toEqual(expectedResponse);
    }) 
  })  
})