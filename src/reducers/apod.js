export const apod = (state = null, action) => {
  switch(action.type) {
    case 'SET_APOD':
      return action.apod
    default: return state
  };
};