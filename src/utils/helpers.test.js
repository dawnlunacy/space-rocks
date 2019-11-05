import helpers from './helpers';
import { findTodaysDate, formatTodaysDate, findDay } from './helpers'

describe('helpers', () => {
  describe('findTodaysDate', () => {
    it('should format a date formatted as yyyy/mm/dd', () => {
      const mockDay = '2019-11-04';
      const expectedResponse = '2019/11/04';

      const mockAction = findTodaysDate(mockDay);
      expect(mockAction).toEqual(expectedResponse);
    }) 
  });

  describe('findDay', () => {
    it('should format date to make readable for user', () => {
      const mockDay = '2019-11-04';
      const expectedResponse = 'Nov 04 2019';

      const mockAction = formatTodaysDate(mockDay);
      expect(mockAction).toEqual(expectedResponse);
    });
  });
})