import type { SearchResponse, Videos } from "../types/movies";
import type { MovieDetail } from "../types/movies";

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

export function getUrl(videos: Videos | null): string | null {
  if (!videos) return null;
  const trailerKey = videos.results.find(
    (i) => i.site === "YouTube" && i.type === "Trailer" && i.official === true,
  );
  if (trailerKey)
    return `https://www.youtube.com/embed/${trailerKey.key}?controls=0&mute=1&autoplay=1&enablejsapi=1&origin=http://localhost:5173`;
  return null;
}

// export function getUrl(videos: Videos[] | null): string | null {
//   return path
//     ? `https://www.youtube.com/embed/${path}?controls=0&mute=1&autoplay=1&enablejsapi=1&origin=http://localhost:5173`
//     : null;
// }

export async function searchMovie(id: number): Promise<MovieDetail> {
  const url = `${BASE_URL}/movie/${id}?append_to_response=videos,credits`;
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`DB Error: ${response.status}`);
  }
  return response.json();
}
