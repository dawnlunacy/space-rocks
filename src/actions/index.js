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
});

export const setCurrentNeoDate = date => ({
  type: "SET_CURRENT_NEO_DATE",
  date
});

export const setStartDate = date => ({
  type: "SET_START_DATE",
  date
});

export const setApod = apod => ({
  type: "SET_APOD",
  apod
});

export const handleError = errorMessage => ({
  type: 'HANDLE_ERROR',
  errorMessage
});