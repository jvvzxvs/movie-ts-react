import { useParams } from "react-router-dom";
import { posterUrl, searchMovie, getUrl } from "../api/tmdb";
import { useEffect, useState } from "react";
import type { MovieDetail } from "../types/movies";
import { ErrorBlock } from "../components/ErrorBlock";
import { PlaceholderSvg } from "../components/MovieCard";

// TODO: movie skeleton,block

function MovieBlock({ movie }: { movie: MovieDetail }) {
  const backdropPath = posterUrl(movie.backdrop_path);
  const posterPath = posterUrl(movie.poster_path);
  const videoPath = getUrl(movie.videos);
  // **:outline-[1px] **:outline-red-700
  return (
    <div className="relative z-0 grid grid-cols-[30%_70%] my-8 mx-2 p-1 w-full gap-1 rounded-md content-start bg-surface/40 overflow-hidden">
      {backdropPath && (
        <div className="absolute inset-0 h-full w-full overflow-hidden -z-10">
          <img
            src={backdropPath}
            alt="Background Blur"
            className="absolute inset-0 h-full w-full object-cover blur-3xl opacity-50 scale-110"
          />

          <div className="absolute inset-0 h-full w-full bg-radial from-transparent to-base" />
        </div>
      )}
      <div className="flex flex-col items-center text-ink-faint  max-w-300">
        <div className="w-full max-w-100 justify-center">
          {posterPath ? (
            <div className="w-full overflow-hidden rounded-md aspect-2/3 bg-elevated flex items-center justify-center text-ink-faint text-xs">
              <img className="w-full" src={posterPath}></img>
            </div>
          ) : (
            <div className="aspect-2/3 w-full bg-elevated flex flex-col items-center justify-center text-ink-faint text-xs">
              <PlaceholderSvg />
              no poster
            </div>
          )}
          <div className="flex m-1 w-full justify-start gap-1.5">
            <div className="flex cursor-default w-fit p-1 text-ink/90 items-center hover:bg-elevated/30 ease-out rounded-md duration-200">
              <span className="text-lg">⭐</span>
              <div className="flex flex-col items-center text-xs/3">
                <span>{movie.vote_average}/10</span>
                <span>{movie.vote_count}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pr-1 pl-0.5">
        <div className="flex justify-between items-end">
          <strong className="text-lg/5 text-ink">{movie.title}</strong>
          <span className="text-ink-faint">{movie.release_date}</span>
        </div>
        <span className="text- text-ink-faint">{movie.tagline}</span>
        <p className="text-sm max-w-250 text-ink-muted/90 py-1 pr-1 bg-elevated/10 rounded-md hover:bg-elevated/25 ease-out duration-200">
          {movie.overview}
        </p>
        <div className="w-full relative max-w-200 aspect-video my-1 rounded-md overflow-hidden">
          {videoPath ? (
            <iframe
              className="absolute -top-15/100"
              width="100%"
              height="130%"
              src={videoPath}
              title="Trailer"
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="w-full h-full bg-elevated/40 flex flex-col items-center justify-center text-ink-faint text-xs">
              <PlaceholderSvg />
              no trailer
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MovieBlockSkeleton() {
  return (
    <div className="grid grid-cols-[30%_70%] my-8 mx-2 p-1 w-dvw gap-1 rounded-md content-start bg-surface/40 **:outline-[1px] **:outline-red-700">
      <div className="flex flex-col items-center text-ink-faint  max-w-300">
        <div className="w-full max-w-100 justify-center">
          <div className="animate-pulse shrink-0 w-full rounded-md aspect-2/3 bg-elevated flex flex-col items-center justify-center text-ink-faint text-xs">
            <PlaceholderSvg />
          </div>
          <div className="flex m-1 w-full justify-start gap-1.5">
            <div className="flex w-fit p-1 bg-elevated/10 hover:bg-elevated/30 ease-out rounded-md duration-200">
              <span>⭐</span>
              <div className="flex flex-col text-xs/3">
                <span>?/10</span>
                <span>????</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pr-1 pl-0.5">
        <div className="flex justify-between items-end">
          <strong className="text-lg/5 text-ink">title</strong>
          <span className="text-ink-faint">year</span>
        </div>
        <span className="text- text-ink-faint">tagline</span>
        <p className="text-sm text-ink-muted/90 py-1 pr-1 bg-elevated/10 rounded-md hover:bg-elevated/25 ease-out duration-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil
          dolore nemo repellat commodi suscipit reprehenderit tempora beatae
          atque consequuntur et quasi sed dolores illo mollitia delectus
          recusandae, vero amet.
        </p>
        <div className="w-full relative max-w-200 aspect-video my-1 rounded-md overflow-hidden">
          <iframe
            className="absolute -top-15/100"
            width="100%"
            height="130%"
            src="https://www.youtube.com/embed/ly36kn0ug4k?controls=0&mute=1&autoplay=1&enablejsapi=1&origin=http://localhost:5173"
            title="Trailer"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export function MoviePage() {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [error, setError] = useState<string | false>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const params = useParams();
  const movieId = Number(params.movieId);

  useEffect(() => {
    if (!movieId) return;

    async function getMovie() {
      setMovie(null);
      setError(false);
      setLoading(true);
      try {
        const response = await searchMovie(movieId);
        if ("success" in response) {
          throw new Error("No movie found with this id");
        }
        setMovie(response);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <div className="bg-base min-h-dvh flex box-border m-0">
      {loading && <MovieBlockSkeleton />}
      {error && !loading && <ErrorBlock error={error} />}
      {!error && movie && !loading && <MovieBlock movie={movie} />}
    </div>
  );
}
