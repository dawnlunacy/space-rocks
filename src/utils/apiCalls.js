export const fetchAPOD = async() => {
  const imageUrl = 'https://api.nasa.gov/planetary/apod?api_key=m98g3WmabopZXIZRCQ0HdHYrEwuHimuH8b8JjicA'
  const response = await fetch(imageUrl)
  if (response.ok) {
    const data = await response.json()
    console.log("data",data.url)
    return data.url;
  } else {
    throw Error(response.statusText)
  }
}

export const fetchNEO = async() => {
  const defaultUrl = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-11-01&end_date=2019-11-08&api_key=m98g3WmabopZXIZRCQ0HdHYrEwuHimuH8b8JjicA';
  const response = await fetch(defaultUrl)
  if (response.ok) {
    const asteroidData = await response.json();
    console.log("asteroids", asteroidData)
    return asteroidData;
  } else {
    throw Error(response.statusText);
  }
}

