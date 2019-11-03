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
