import { currentNeoDate } from './currentNeoDate';

describe('currentNeoDate', () => {
  it('should return the initial state', () => {
    const expected = '';

    const result = currentNeoDate(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with the current NEO date being viewed', () => {
    const mockDate = "2019-11-07"
    const initialState = '';
    const state = initialState;
    const action = {
      type: 'SET_CURRENT_NEO_DATE',
      date: mockDate
    }

    const newState = mockDate;
    const result = currentNeoDate(state, action);

    expect(result).toEqual(newState);
  });
});