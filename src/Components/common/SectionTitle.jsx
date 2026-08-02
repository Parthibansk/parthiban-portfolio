const SectionTitle = ({ eyebrow, title, description }) => {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.4em] text-sky-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base text-slate-300">{description}</p> : null}
    </div>
  )
}

export default SectionTitle
