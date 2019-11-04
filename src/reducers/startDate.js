export const startDate = (state='', action) => {
  switch(action.type) {
    case 'SET_START_DATE':
        return action.date
      default: return state
  }
};