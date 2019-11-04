import { nextWeekUrl } from './nextWeekUrl';
import { mockNextWeekUrl } from '../utils/mockData';

describe('nextWeekUrl', () => {
  it('should return the initial state', () => {
    const expected = '';

    const result = nextWeekUrl(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with the updated nextWeekUrl', () => {
    const initialState = '';
    const state = initialState;
    const action = {
      type: 'SET_NEXT_WEEK',
      nextWeekFetchUrl: mockNextWeekUrl
    }

    const newState = mockNextWeekUrl;
    const result = nextWeekUrl(state, action);

    expect(result).toEqual(newState);
  });
});