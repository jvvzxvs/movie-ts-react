export interface Movie {
  id: number;
  title: string;
  vote_average: number;
  vote_count: number;
  poster_path: string | null;
  overview: string;
  release_date: string;
}

export interface SearchResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Cast {
  cast_id: number;
  name: string;
  profile_path: string | null;
}

export interface MovieDetail {
  id: number;
  title: string;
  tagline: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  key: string;
  cast: Cast[];
}
