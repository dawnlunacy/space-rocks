import { formatDateForFetch } from './helpers';
import { findTodaysDate, formatTodaysDate, findDay, findEndOfWeek, cleanNeoData } from './helpers';
import { mockNeoDataUnfiltered } from '../utils/mockNeoDataUnfiltered';
import { mockCleanNeos } from '../utils/mockData';

describe('helpers', () => {
  describe('findTodaysDate', () => {
    it('should format a date formatted as yyyy/mm/dd', () => {
      const mockDay = '2019-11-04';
      const expectedResponse = '2019/11/04';

      const mockAction = findTodaysDate(mockDay);
      expect(mockAction).toEqual(expectedResponse);
    }) 
  });

  describe('formatTodaysDate', () => {
    it('should format date to make readable for user', () => {
      const mockDay = '2019-11-04';
      const expectedResponse = 'Nov 04 2019';

      const mockAction = formatTodaysDate(mockDay);
      expect(mockAction).toEqual(expectedResponse);
    });
  });

  describe('findDay', () => {
    it('should find day of the week', () => {
      const mockDay = '2019-11-04';
      const expectedResponse = 'Monday';

      const mockAction = findDay(mockDay);
      expect(mockAction).toEqual(expectedResponse);
    });
  });

  describe('findEndOfWeek', () => {
    it('should find day of the week', () => {
      const mockDay = '2019-11-04';
      const expectedResponse = '2019-11-10';

      const mockAction = findEndOfWeek(mockDay);
      expect(mockAction).toEqual(expectedResponse);
    });
  });
  
  describe('formatDateForFetch', () => {
    it('should format the date to yyyy-mm-dd', () => {
      const mockDay = '2019/11/04';
      const expectedResponse = '2019-11-04';

      const mockAction = formatDateForFetch(mockDay);
      expect(mockAction).toEqual(expectedResponse);
    });
  });

  describe('cleanNeoDate', () => {
    it.skip('should clean up the original data to the desired data', () => {
      const mockData = mockNeoDataUnfiltered;
      const expectedResponse = mockCleanNeos

      const mockAction = cleanNeoData(mockData);
      expect(mockAction).toEqual(expectedResponse);
    });
  });
  
})