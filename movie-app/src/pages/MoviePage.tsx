import { useParams } from "react-router-dom";
import { posterUrl, searchMovie } from "../api/tmdb";
import { useEffect, useState } from "react";
import type { MovieDetail } from "../types/movies";
import { ErrorBlock } from "../components/ErrorBlock";
import { PlaceholderSvg } from "../components/MovieCard";

// TODO: movie skeleton,block

// function MovieBlock({ movie }: { movie: MovieDetail }) {
//   const backdropPath = posterUrl(movie.backdrop_path);
//   const posterPath = posterUrl(movie.poster_path);
//   return (
//     { posterPath?
//         (
//             <div className="w-full h-full">
//           <img src={posterPath} />
//         </div>
//     ) : ()

//     }
//   );
// }

function MovieBlockSkeleton() {
  return (
    <div role="status" className="animate-pulse flex items-center">
      <div className="aspect-2/3 w-full bg-elevated flex flex-col items-center justify-center text-ink-faint text-xs max-h-full">
        <PlaceholderSvg />
      </div>
      <div className="w-full">
        <div className="h-2.5 bg-ink-faint/40 rounded-full w-48 mb-4"></div>
        <div className="h-2 bg-ink-faint/40 rounded-full max-w-[480px] mb-2.5"></div>
        <div className="h-2 bg-ink-faint/40 rounded-full mb-2.5"></div>
        <div className="h-2 bg-ink-faint/40 rounded-full max-w-[440px] mb-2.5"></div>
        <div className="h-2 bg-ink-faint/40 rounded-full max-w-[460px] mb-2.5"></div>
        <div className="h-2 bg-ink-faint/40 rounded-full max-w-[360px]"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function MoviePage() {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [error, setError] = useState<string | false>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const params = useParams();
  const movieId = Number(params.movieId);

  //   useEffect(() => {
  //     if (!movieId) return;

  //     async function getMovie() {
  //       setMovie(null);
  //       setError(false);
  //       setLoading(true);
  //       try {
  //         const response = await searchMovie(movieId);
  //         if ("success" in response) {
  //           throw new Error("No movie found with this id");
  //         }
  //         setMovie(response);
  //       } catch (e) {
  //         setError(e instanceof Error ? e.message : "Unknown error");
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //     getMovie();
  //   }, [movieId]);

  return (
    <div className="bg-base min-h-dvh flex box-border m-0">
      <MovieBlockSkeleton />
      {/* {loading && <div>Загрузка</div>}
      {error && !loading && <ErrorBlock error={error} />}
      {!error && movie && !loading && <MovieBlock movie={movie} />} */}
    </div>
  );
}
