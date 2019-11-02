export const neos = (state = null, action) => {
  switch(action.type) {
    case 'GET_NEOS': 
      return action.neos
    default: return state
  }
}
