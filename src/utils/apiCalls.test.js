import { fetchAPOD, fetchNeo } from './apiCalls';
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

    it('should fetch with the correct url', () => {
      const mockUrl = 'https://api.nasa.gov/planetary/apod?api_key=m98g3WmabopZXIZRCQ0HdHYrEwuHimuH8b8JjicA';
      fetchAPOD();
      
      expect(window.fetch).toHaveBeenCalledWith(mockUrl)
    });

    it('should return an object of Astrony Picture of The Day information (HAPPY)', () => {
      fetchAPOD()
      .then(results => expect(results).toEqual(mockUnfilterdApodResponse));
    });

    it('should return an error if the server is down', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 500
      }));

      expect(fetchAPOD()).rejects.toEqual(Error());
    });

    it('should return an error if Promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 500
      }));

      expect(fetchAPOD()).rejects.toEqual(Error());
    });

    it('should')
  });
});