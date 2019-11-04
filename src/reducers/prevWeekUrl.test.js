import { prevWeekUrl } from './prevWeekUrl';
import { mockPrevWeekUrl } from '../utils/mockData';

describe('prevWeekUrl', () => {
  it('should return the initial state', () => {
    const expected = '';

    const result = prevWeekUrl(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with the updated prevWeekUrl', () => {
    const initialState = '';
    const state = initialState;
    const action = {
      type: 'SET_PREV_WEEK',
      prevWeekFetchUrl: mockPrevWeekUrl
    }

    const newState = mockPrevWeekUrl;
    const result = prevWeekUrl(state, action);

    expect(result).toEqual(newState);
  });
});