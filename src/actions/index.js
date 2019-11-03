export const setNeos = neos => ({
  type: "SET_NEOS",
  neos
});

export const setTotalNeos = totalNeos => ({
  type: "SET_TOTAL_NEOS",
  totalNeos
});

export const setPrevWeek = prevWeekFetchUrl => ({
  type: "SET_PREV_WEEK",
  prevWeekFetchUrl
});

export const setNextWeek = nextWeekFetchUrl => ({
  type: "SET_NEXT_WEEK",
  nextWeekFetchUrl
});

export const updateLoading = bool => ({
  type: "UPDATE_LOADING",
  bool
})