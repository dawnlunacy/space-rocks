import { totalNeos } from './totalNeos';

describe('totalNeos', () => {
  it('should return the initial state', () => {
    const expected = 0;

    const result = totalNeos(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with the current total of NEOs found from query', () => {
    const mockTotal = "2019-11-07"
    const initialState = 0;
    const state = initialState;
    const action = {
      type: 'SET_TOTAL_NEOS',
      totalNeos: mockTotal
    }

    const newState = mockTotal;
    const result = totalNeos(state, action);

    expect(result).toEqual(newState);
  });
});