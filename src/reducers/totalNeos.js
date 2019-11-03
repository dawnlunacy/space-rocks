export const totalNeos = (state = 0, action) => {
  switch(action.type) {
    case 'SET_TOTAL_NEOS':
      return action.totalNeos
    default: return state
  }
}