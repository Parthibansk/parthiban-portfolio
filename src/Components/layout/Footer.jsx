const Footer = () => {
  return (
    <footer className="mt-10 rounded-[28px] border border-white/10 bg-slate-900/60 px-6 py-5 text-sm text-slate-300 backdrop-blur-xl">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Parthiban K — enterprise .NET engineering for high-trust business systems.</p>
        <div className="flex gap-4">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
