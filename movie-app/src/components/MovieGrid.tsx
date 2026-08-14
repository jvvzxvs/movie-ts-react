import type { Movie } from "../types/movies";
import { MovieCard, SkeletonCard } from "./MovieCard";

export function MovieGrid({ results }: { results: Movie[] }) {
  if (results.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <div className="flex flex-col my-8 mx-2 bg-surface/40 max-w-40 w-1/2 items-center rounded-md p-2">
          <strong className="text-3xl text-ink/90">:(</strong>
          <span className="leading-5 p-1 text-ink/90">no movies found</span>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-surface/40 rounded-md h-fit my-8 mx-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-dvw p-1">
      {results.map((movie: Movie) => (
        <MovieCard key={`movie-${movie.id}`} movie={movie} />
      ))}
    </div>
  );
}

export function SkeletonGrid() {
  return (
    <div className="bg-surface/40 rounded-md h-fit my-8 mx-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-dvw p-1">
      {Array.from({ length: 8 }, (_, index) => (
        <SkeletonCard key={`skeleton-${index}`} />
      ))}
    </div>
  );
}
