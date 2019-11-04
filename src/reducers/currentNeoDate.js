export const currentNeoDate = (state = '', action) => {
  switch(action.type) {
    case 'SET_CURRENT_NEO_DATE':
      return action.date
    default: return state
  }
}