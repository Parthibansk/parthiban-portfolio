const Loader = () => {
  return (
    <div className="grid min-h-[180px] place-items-center rounded-[28px] border border-white/10 bg-slate-900/60 backdrop-blur-xl">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-sky-200">
        <span className="h-2 w-2 animate-pulse rounded-full bg-sky-300" />
        Loading experience
      </div>
    </div>
  )
}

export default Loader
