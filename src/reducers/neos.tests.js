import { neos } from './neos';
import { mockCleanNeos } from '../utils/mockData';

describe('neos', () => {
  it('should return the initial state', () => {
    const expected = {};

    const result = neos(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with the updated neos', () => {
    const mockNeos = mockCleanNeos;
    const initialState = null;
    const state = initialState;
    const action = {
      type: 'SET_NEOS',
      neos: mockNeos
    }

    const newState = mockNeos;
    const result = neos(state, action);

    expect(result).toEqual(newState);
  });
});