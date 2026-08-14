export interface BottomBarProps {
  page: number;
  setPage: (page: number) => void;
  pageMax: number;
}

export function BottomBar({ page, setPage, pageMax }: BottomBarProps) {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="flex justify-center items-end gap-1 text-xs sm:text-sm">
      <div className="w-fit h-fit bg-surface/60 py-1 px-2 rounded-md">
        <button
          disabled={page <= 1}
          onClick={() => {
            setPage(page - 1);
            scrollTop();
          }}
          className="bg-accent cursor-pointer px-1.5 text-accent-ink shadow-md/10 outline-2 rounded-md outline-accent-ink shadow-accent-hover hover:bg-accent-hover active:shadow-md/20 duration-100 ease-out"
        >
          {"<"}
        </button>
        <span className="cursor-default px-2 font-mono text-ink-faint">
          {page} of {pageMax}
        </span>
        <button
          disabled={page >= pageMax}
          onClick={() => {
            setPage(page + 1);
            scrollTop();
          }}
          className="bg-accent cursor-pointer px-1.5 text-accent-ink shadow-md/10 outline-2 rounded-md outline-accent-ink shadow-accent-hover hover:bg-accent-hover active:shadow-md/20 duration-100 ease-out"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
