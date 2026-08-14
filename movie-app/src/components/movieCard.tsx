import type { Movie } from "../types/movies";
import { posterUrl } from "../api/tmdb";

export function SkeletonCard() {
  return (
    <div className="animate-pulse m-1 aspect-2/3 w-full rounded-md bg-elevated flex items-center justify-center text-ink-faint text-xs">
      <svg
        className="w-11 h-11 text-ink-faint"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
        />
      </svg>
    </div>
  );
}

export function MovieCard({ movie }: { movie: Movie }) {
  const path = posterUrl(movie.poster_path);
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "—";

  return (
    <div className="bg-surface m-1 rounded-md overflow-hidden flex flex-col hover:bg-elevated/70 hover:shadow-base hover:shadow-xl ease-out duration-200">
      {path ? (
        <img
          src={path}
          alt={movie.title}
          loading="lazy"
          className="aspect-2/3 w-full object-cover"
        />
      ) : (
        <div className="aspect-2/3 w-full bg-elevated flex flex-col items-center justify-center text-ink-faint text-xs">
          <svg
            className="w-11 h-11 text-ink-faint"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
          no poster
        </div>
      )}

      <div className="p-2 flex flex-col gap-1">
        <div className="text-ink text-sm truncate">{movie.title}</div>
        <div className="flex justify-between text-ink-muted text-xs">
          <span>{year}</span>
          <div className="group flex flex-col justify-center">
            <div className="relative w-20 h-3">
              <span className="group-hover:opacity-0 truncate flex absolute items-center justify-end inset-0 text-accent whitespace-nowrap opacity-100 transition-opacity ease-out duration-200">
                ⭐ {movie.vote_average.toFixed(1)}
              </span>
              <span className="group-hover:opacity-100 truncate flex absolute items-center justify-end inset-0 text-ink-muted text-xs whitespace-nowrap opacity-0 transition-opacity ease-out duration-200">
                {movie.vote_count} votes
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
