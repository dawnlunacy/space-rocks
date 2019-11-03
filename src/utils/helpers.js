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

export const isEmpty = (obj) => {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

export const cleanNeoData = (neos) => {
  let neoKeyDates = Object.keys(neos.near_earth_objects);
  return neoKeyDates.reduce((acc, currentDateKey) => {
    neos.near_earth_objects[currentDateKey].forEach(currentNeo => {
        if ( !acc[currentDateKey]) {
          acc[currentDateKey] = []
        } 
        let estimatedDiameterMinNotRounded = currentNeo.estimated_diameter.feet.estimated_diameter_min;
        let estimatedDiameterRounded = estimatedDiameterMinNotRounded.toFixed(2)
        console.log("ROUNDED?", estimatedDiameterRounded)

        let infoToKeep = {
          id: currentNeo.id,
          name: currentNeo.name,
          nasaUrl: currentNeo.nasa_jpl_url,
          isPotentiallyHazardous: currentNeo.is_potentially_hazardous_asteroid.toString(),
          estimatedDiameter: currentNeo.estimated_diameter.feet,
          closeApproachData: currentNeo.close_approach_data.reduce((acc, closeData) => {

            const cleanApproachData = {
              closeApproachDate: closeData.close_approach_date,
              relativeVelocity: closeData.relative_velocity.miles_per_hour,
              missEarthDistance: closeData.miss_distance.miles,
            }
            
            acc.push(cleanApproachData);
            return acc
          }, [])
        }

        acc[currentDateKey].push(infoToKeep)

    })

    return acc
  }, {})
}



