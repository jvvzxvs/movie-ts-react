import { useEffect, useState } from "react";
import type { SearchResponse } from "./types/movies";
import { searchMovies } from "./api/tmdb";
import { TopBar } from "./components/TopBar";
import { BottomBar } from "./components/BottomBar";
import { ErrorBlock } from "./components/ErrorBlock";
import { StartBlock } from "./components/StartBlock";
import { MovieGrid, SkeletonGrid } from "./components/MovieGrid";

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [adult, setAdult] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [response, setResponse] = useState<SearchResponse | null>(null);
  const [submittedQuery, setSubmittedQuery] = useState("");

  useEffect(() => {
    if (!submittedQuery) {
      return;
    }
    let cancelled = false;

    (async () => {
      setLoading(true);

      try {
        const response = await searchMovies(submittedQuery, adult, page);
        if (!cancelled) {
          setResponse(response);
          setError("");
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Unknown error");
          console.error(e);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [adult, page, submittedQuery]);

  return (
    <div className="bg-base min-h-dvh flex-col box-border m-0">
      <TopBar
        query={query}
        setQuery={setQuery}
        onSubmit={(query) => {
          setPage(1);
          setSubmittedQuery(query.trim());
        }}
        adult={adult}
        setAdult={setAdult}
        found={response?.total_results ?? 0}
      />
      {loading && <SkeletonGrid />}
      {!response && !loading && !error && <StartBlock />}
      {error && !loading && <ErrorBlock error={error} />}
      {response && !error && !loading && (
        <>
          <MovieGrid results={response.results} />
          <BottomBar
            page={page}
            setPage={setPage}
            pageMax={response.total_pages}
          />
        </>
      )}
    </div>
  );
}

export default App;
