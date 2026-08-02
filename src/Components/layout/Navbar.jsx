import { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const Navbar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-4 z-40 mb-8 rounded-full border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-sky-300">Parthiban K</p>
          <p className="text-[11px] text-slate-400">Senior .NET Developer</p>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-sky-400/60 hover:text-white"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button
            type="button"
            className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/80 p-4 md:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-200" onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
