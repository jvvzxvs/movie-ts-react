import type { SearchResponse } from "../types/movies";

const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
  },
};

export async function searchMovies(
  query: string,
  adult: boolean,
  page = 1,
): Promise<SearchResponse> {
  const url = `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&include_adult=${adult}&language=en-US&page=${page}`;
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`DB Error: ${response.status}`);
  }
  return response.json();
}

export function posterUrl(path: string | null, size = "w342"): string | null {
  return path ? `${IMG_URL}/${size}${path}` : null;
}
