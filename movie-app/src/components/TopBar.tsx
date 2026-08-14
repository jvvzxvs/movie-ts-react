interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
  onSubmit: (query: string) => void;
}

interface AdultBtnProps {
  adult: boolean;
  setAdult: (adult: boolean) => void;
}

interface FoundProps {
  found: number;
}

type TopBarProps = SearchBarProps & AdultBtnProps & FoundProps;

export function TopBar({
  query,
  setQuery,
  onSubmit,
  adult,
  setAdult,
  found,
}: TopBarProps) {
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(query);
  }

  return (
    <div className="w-full grid items-center grid-cols-2 sm:grid-cols-3 px-2 text-base sm:text-lg">
      <div className="hidden sm:block text-ink-faint px-2">
        movies found: {found}
      </div>
      <form className="sm:justify-self-center py-2" onSubmit={handleSubmit}>
        <div className="inline-flex items-center justify-center gap-1">
          <input
            value={query}
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            className="bg-surface rounded-md text-ink outline-0 px-2 py-1 box-border max-w24 w-full"
          />
          <button
            type="submit"
            className="bg-accent max-w-fit w-full truncate px-2 py-1 text-accent-ink shadow-md/10 outline-2 rounded-md outline-accent-ink shadow-accent-hover hover:bg-accent-hover active:shadow-md/20 duration-100 ease-out"
          >
            search
          </button>
        </div>
      </form>
      <label className="sm:justify-self-end flex justify-end p-2 gap-1 items-end truncate">
        <input
          type="checkbox"
          checked={!adult}
          onChange={(e) => setAdult(!e.target.checked)}
          className="sr-only peer"
        />
        <div className="relative flex w-[2em] h-[1.2em] p-0.5 items-center bg-elevated border border-line peer-checked:bg-accent transition-colors duration-200 rounded-lg peer-checked:[&>div]:translate-x-[0.7em] peer-checked:[&>div]:bg-accent-ink/90">
          <div className="h-[1em] w-[1em] bg-ink-muted rounded-md transition-transform duration-200" />
        </div>
        <span className="text-ink-faint peer-checked:text-ink/90 transition-colors duration-200 truncate">
          safe mode
        </span>
      </label>
    </div>
  );
}
