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

  
});