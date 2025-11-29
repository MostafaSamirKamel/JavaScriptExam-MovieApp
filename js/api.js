//api.js

import {display} from "./component.js"

const API_KEY = "a295c2fda0d44898d34830970fce7edc";
const BASE_URL = "https://api.themoviedb.org/3";

export async function getMovie(endpoint = "movie/now_playing", page = "1") {
  try {
    const response = await fetch(
      `${BASE_URL}/${endpoint}?api_key=${API_KEY}&language=en-US&page=${page}`
    );

    if (!response.ok) {
        throw new Error("API request failed");
    }
    
    const data = await response.json();
    display(data.results);

  } catch (err) {
    console.error("Error:", err.message);
  }
}

export async function searchMovie(query,  page = "1") {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=${page}`
    );

    if (!response.ok) {
        throw new Error("API request failed");
    }
    
    const data = await response.json();
    display(data.results);

  } catch (err) {
    console.error("Error:", err.message);
  }
}

