export const fetchAPOD = async() => {
  const imageUrl = 'https://api.nasa.gov/planetary/apod?api_key=m98g3WmabopZXIZRCQ0HdHYrEwuHimuH8b8JjicA'
  const response = await fetch(imageUrl)
  if(response.ok) {
    const data = await response.json()
    console.log("data",data.url)
    return data.url;
  } else {
    throw Error(response.statusText)
  }
}