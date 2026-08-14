export function ErrorBlock({ error }: { error: string }) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col my-8 mx-2 bg-danger/10 max-w-40 w-1/2 items-center rounded-md p-2">
        <span className="text-6xl sm:text-8xl pb-4">⚠️</span>
        <strong className="text-3xl text-ink/90">Error!</strong>
        <span className="leading-5 p-1 text-ink/90">
          {error}. Please try again.
        </span>
      </div>
    </div>
  );
}
