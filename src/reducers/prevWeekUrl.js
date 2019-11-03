export const prevWeekUrl = (state = '', action) => {
  switch(action.type) {
    case "SET_PREV_WEEK":
      return action.prevWeekFetchUrl
    default: return state
  }
};