export const fetchAPOD = async() => {
  const imageUrl = 'https://api.nasa.gov/planetary/apod?api_key=m98g3WmabopZXIZRCQ0HdHYrEwuHimuH8b8JjicA'
  const response = await fetch(imageUrl)
  if (response.ok) {
    const data = await response.json()
    return data.url;
  } else {
    throw Error(response.statusText)
  }
}

export const fetchNEO = async(startDate, endDate) => {
  console.log("inFetch1", startDate)
  console.log("inFetch2", endDate)
  const defaultUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=m98g3WmabopZXIZRCQ0HdHYrEwuHimuH8b8JjicA`;
  const response = await fetch(defaultUrl)
  if (response.ok) {
    const asteroidData = await response.json();
    console.log("asteroids", asteroidData)
    return asteroidData;
  } else {
    throw Error(response.statusText);
  }
}

