import { API_KEY, REQUEST_BASE_URL } from "./constants";

export const requests = {
  getTrending: `${REQUEST_BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  getTopRated: `${REQUEST_BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  getActionMovies: `${REQUEST_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  getComedyMovies: `${REQUEST_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  getHorrorMovies: `${REQUEST_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  getRomanceMovies: `${REQUEST_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  getDocumentaries: `${REQUEST_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
