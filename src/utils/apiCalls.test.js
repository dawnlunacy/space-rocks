import { fetchAPOD, fetchNEO } from './apiCalls';
import { mockNeoDataUnfiltered } from './mockNeoDataUnfiltered';
import { mockUnfilterdApodResponse } from './mockData';

describe('apiCalls', () => {
  describe('fetchAPOD', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockUnfilterdApodResponse)
        });
      });
    });

    it('should fetch with the correct url (HAPPY)', () => {
      const mockUrl = 'https://api.nasa.gov/planetary/apod?api_key=m98g3WmabopZXIZRCQ0HdHYrEwuHimuH8b8JjicA';
      fetchAPOD();
      
      expect(window.fetch).toHaveBeenCalledWith(mockUrl)
    });

    it('should return an object of Astrony Picture of The Day information (HAPPY)', () => {
      fetchAPOD()
      .then(results => expect(results).toEqual(mockUnfilterdApodResponse));
    });

    it('should return an error if Promise rejects(SAD)', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 500
      }));

      expect(fetchAPOD()).rejects.toEqual(Error("There was an error loading the Astronomy Picture Of the Day from NASA. Try again or look outside for incoming asteroids or comets."));
    });

    it('should return an error (SAD)', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false,
          json: () => Promise.resolve({ message:"There was an error loading the Astronomy Picture Of the Day from NASA. Try again or look outside for incoming asteroids or comets." })
        })
      });
     
      expect(fetchAPOD()).rejects.toEqual(Error("There was an error loading the Astronomy Picture Of the Day from NASA. Try again or look outside for incoming asteroids or comets."))
    });
  });

  describe('fetchNEO', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockNeoDataUnfiltered)
        });
      });
    });

    it('should fetch with the correct url', () => {
      const startDate = "2019-11-03";
      const endDate = "2019-11-10"
      const mockUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=m98g3WmabopZXIZRCQ0HdHYrEwuHimuH8b8JjicA`;
      fetchNEO(startDate, endDate);
      
      expect(window.fetch).toHaveBeenCalledWith(mockUrl)
    });

    it('should return an object of the NEO information for the week in query (HAPPY)', () => {
      fetchNEO()
      .then(results => expect(results).toEqual(mockNeoDataUnfiltered));
    });

    it('should return an error if Promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 500
      }));

      expect(fetchNEO()).rejects.toEqual(Error("There was an error loading the NEAR EARTH OBJECTS from NASA. Try again or look outside for incoming asteroids or comets."));
    });

    it('should return an error (SAD)', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false,
          json: () => Promise.resolve(mockNeoDataUnfiltered)
        })
      });
     
      expect(fetchNEO()).rejects.toEqual(Error("There was an error loading the NEAR EARTH OBJECTS from NASA. Try again or look outside for incoming asteroids or comets."))
    });
  });
})