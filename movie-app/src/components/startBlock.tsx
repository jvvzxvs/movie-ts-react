export function StartBlock() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col my-8 mx-2 bg-surface/40 max-w-40 w-3/4 items-center rounded-md p-2">
        <strong className="text-3xl text-ink/90">welcome!</strong>
        <span className="leading-5 p-1 text-ink/90">
          search something to start
        </span>
      </div>
    </div>
  );
}
