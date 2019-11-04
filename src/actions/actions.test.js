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