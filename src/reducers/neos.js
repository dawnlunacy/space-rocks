export const neos = (state = {}, action) => {
  switch(action.type) {
    case 'SET_NEOS': 
      return action.neos
    default: return state
  }
}
