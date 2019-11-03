export const neos = (state = null, action) => {
  switch(action.type) {
    case 'SET_NEOS': 
      return action.neos
    default: return state
  }
}
