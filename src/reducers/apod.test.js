import { apod } from './apod';
import { mockApod } from '../utils/mockData';

describe('apod', () => {
  it('should return the initial state', () => {
    const expected = null;

    const result = apod(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with the apod of the day from NASA', () => {
    const initialState = null;
    const state = initialState;
    const action = {
      type: 'SET_APOD',
      apod: mockApod
    }

    const newState = mockApod;
    const result = apod(state, action);

    expect(result).toEqual(newState);
  });
});