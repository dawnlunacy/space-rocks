export const findTodaysDate = (day) => {
  let today;
  if (day === undefined) {
    today = new Date();
  } else {
    today = new Date(day)
  }
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  let todayFormat = yyyy + '/' + mm + '/' + dd;
  return todayFormat
}

export const formatTodaysDate = (date) => {
  let formatDate = new Date(date).toString().split(' ').slice(1, 4).join(' ')
  return formatDate
}

export const findDay = () => {
  let today = findTodaysDate();
  let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let day = weekday[new Date(today).getDay()]
  return day
}

export const findEndOfWeek = (startDate) => {
  let startingDate;
  if (startDate === undefined) {
   startingDate = new Date()
  } else {
    startingDate = new Date(startDate);
  }
  const endDateRaw = startingDate.setDate(startingDate.getDate() + 7)
  const endingDate = formatDateForFetch(endDateRaw)

  return endingDate
}

export const formatDateForFetch = (date) => {
  let today;
  if (date === undefined) {
    today = new Date();
  } else {
    today = new Date(date)
  }
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  let todayFormat = yyyy + '-' + mm + '-' + dd;
  return todayFormat
}

