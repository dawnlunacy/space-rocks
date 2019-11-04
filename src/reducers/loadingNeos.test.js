import { loadingNeos } from './loadingNeos';

describe('loadingNeos', () => {
  it('should return the initial state', () => {
    const expected = true;

    const result = loadingNeos(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with the updated loading status', () => {
    const mockBool = false;
    const initialState = true;
    const state = initialState;
    const action = {
      type: 'UPDATE_LOADING',
      bool: mockBool
    }

    const newState = mockBool;
    const result = loadingNeos(state, action);

    expect(result).toEqual(newState);
  });
});