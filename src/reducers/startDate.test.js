import { startDate } from './startDate';

describe('startDate', () => {
  it('should return the initial state', () => {
    const expected = '';

    const result = startDate(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with the current start date of NEOs', () => {
    const mockDate = "2019-11-07"
    const initialState = '';
    const state = initialState;
    const action = {
      type: 'SET_START_DATE',
      date: mockDate
    }

    const newState = mockDate;
    const result = startDate(state, action);

    expect(result).toEqual(newState);
  });
});