import { errorMessage } from './errorMessage';

describe('errorMessage', () => {
  it('should return the initial state', () => {
    const expected = '';

    const result = errorMessage(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with the current error message', () => {
    const mockErrorMessage = "YOU MESSED UP"
    const initialState = '';
    const state = initialState;
    const action = {
      type: 'HANDLE_ERROR',
      errorMessage: mockErrorMessage
    }

    const newState = mockErrorMessage;
    const result = errorMessage(state, action);

    expect(result).toEqual(newState);
  });
});