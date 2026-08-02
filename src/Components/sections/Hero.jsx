import { motion } from 'framer-motion'
import { FaArrowRight, FaCloud } from 'react-icons/fa'
import { SiDotnet, SiReact, SiSqlite } from 'react-icons/si'

const resumePdf = new URL('../../Resume Parthiban.pdf', import.meta.url).href

const Hero = ({ typedText }) => {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/60 px-6 py-10 backdrop-blur-xl sm:px-8 lg:px-12 lg:py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.25),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.25),transparent_28%)]" />
      <div className="absolute -left-12 top-8 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="absolute -right-8 bottom-0 h-52 w-52 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-sky-200">
            <span className="h-2 w-2 rounded-full bg-sky-300" />
            Senior .NET Developer
          </div>
          <div className="space-y-4">
            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Parthiban K
            </h1>
            <div className="min-h-[64px] text-xl text-sky-200 sm:text-2xl">
              <span className="font-medium tracking-wide">{typedText}</span>
              <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-sky-300 align-middle" />
            </div>
            <p className="max-w-2xl text-lg text-slate-300">
              Senior .NET Developer with 10+ years of experience designing, developing, and deploying scalable enterprise applications across SaaS, healthcare, finance, and data modernization platforms.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">
              Hire Me <FaArrowRight />
            </a>
            <a href="#projects" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-400/60 hover:bg-white/10">
              View Projects
            </a>
            <a href={resumePdf} download className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-400/60 hover:bg-white/10">
              Download Resume
            </a>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-slate-300">
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2">10+ Years Experience</div>
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Immediate Joiner</div>
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2">ASP.NET MVC | .NET Core | Azure | SQL Server</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-3 shadow-[0_32px_120px_rgba(14,116,144,0.25)] backdrop-blur-xl">
            <div className="absolute left-4 top-4 h-3 w-3 rounded-full bg-emerald-400" />
            <div className="absolute right-4 top-4 h-3 w-3 rounded-full bg-amber-400" />
            <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-slate-950/80 p-4">
              <div className="relative grid min-h-[480px] place-items-center overflow-hidden rounded-[20px] bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.45),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.45),transparent_32%),#020617]">
                <div className="absolute inset-0 opacity-60">
                  <div className="absolute left-10 top-12 h-20 w-20 rounded-full border border-sky-400/30" />
                  <div className="absolute bottom-14 right-10 h-28 w-28 rounded-full border border-violet-400/30" />
                  <div className="absolute right-14 top-16 h-10 w-10 rounded-full bg-sky-400/20 blur-xl" />
                </div>
                <div className="absolute left-6 top-6 flex gap-2 text-xl text-slate-200">
                  <SiDotnet className="rounded-md bg-white/5 p-2" />
                  <SiReact className="rounded-md bg-white/5 p-2" />
                  <FaCloud className="rounded-md bg-white/5 p-2" />
                  <SiSqlite className="rounded-md bg-white/5 p-2" />
                </div>
                <div className="relative z-10 max-w-xs rounded-[28px] border border-white/10 bg-slate-900/70 px-6 py-8 text-center backdrop-blur-xl">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-sky-400/40 bg-gradient-to-br from-sky-400/20 to-violet-500/20 text-4xl font-bold text-white">
                    PK
                  </div>
                  <p className="text-xs uppercase tracking-[0.45em] text-sky-200">Visual Systems</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Enterprise Platform Design</h2>
                  <p className="mt-3 text-sm text-slate-300">Designing secure, resilient experiences for ambitious companies entering the next phase of digital growth.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
