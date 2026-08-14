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
