import { fetchAPOD, fetchNeo } from './apiCalls';
import { mockNeoDataUnfiltered } from './mockNeoDataUnfiltered';

describe('apiCalls', () => {
  describe('fetchAPOD', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockNeoDataUnfiltered)
        });
      });
    });

    it('should fetch with the correct url', () => {
      const mockUrl = 'https://api.nasa.gov/planetary/apod?api_key=m98g3WmabopZXIZRCQ0HdHYrEwuHimuH8b8JjicA';
      fetchAPOD();
      
      expect(window.fetch).toHaveBeenCalledWith(mockUrl)
    });

    it('should ')
  });
});