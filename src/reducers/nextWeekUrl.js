export const nextWeekUrl = (state = '', action) => {
  switch(action.type) {
    case 'SET_NEXT_WEEK':
      return action.nextWeekFetchUrl
    default: return state
  }
}