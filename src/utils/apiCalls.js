export const fetchAPOD = async() => {
  const imageUrl = 'https://api.nasa.gov/planetary/apod?api_key=m98g3WmabopZXIZRCQ0HdHYrEwuHimuH8b8JjicA';
  const response = await fetch(imageUrl)
  if (response.ok) {
    const data = await response.json()
    return data.url;
  } else {
    throw Error("There was an error loading the Astronomy Picture Of the Day from NASA. Try again or look outside for incoming asteroids or comets.")
  }
}

export const fetchNEO = async(startDate, endDate) => {
  const defaultUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=m98g3WmabopZXIZRCQ0HdHYrEwuHimuH8b8JjicAYOLO`;
  const response = await fetch(defaultUrl)
  if (response.ok) {
    const asteroidData = await response.json();
    return asteroidData;
  } else {
    throw Error("There was an error loading the NEAR EARTH OBJECTS from NASA. Try again or look outside for incoming asteroids or comets.");
  }
}

