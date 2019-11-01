export const findTodaysDate = () =>{
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  let todayFormat = yyyy + '/' + mm + '/' + dd;
  return todayFormat
}

export const formatTodaysDate = (stringDate) => {
  let formatDate = new Date(stringDate).toString().split(' ').slice(1, 4).join(' ')
  return formatDate
}

export const findDay = () => {
  let today = findTodaysDate();
  let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let day = weekday[new Date(today).getDay()]
  return day
}