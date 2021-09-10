import axios from "axios";

export const baseURL = "http://www.omdbapi.com/";

export const SearchMovie = (query) => {
  return axios.get(
    `https://www.omdbapi.com/?apikey=b76b385c&page=1&type=movie&Content-Type=application/json/&s=${query}`
  );
};

export const GetMovieDetails = (id) => {
  return axios.get(
    `https://www.omdbapi.com/?apikey=b76b385c&page=1&type=movie&Content-Type=application/json/&i=${id}`
  );
};
