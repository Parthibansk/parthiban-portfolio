import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import { projects } from '../../data/projects'

const projectTypes = ['All', 'Enterprise Systems', 'FinTech', 'People Operations']

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    return activeFilter === 'All' ? projects : projects.filter((project) => project.type === activeFilter)
  }, [activeFilter])

  return (
    <section id="projects" className="rounded-[32px] border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <SectionTitle
          eyebrow="Projects"
          title="Case studies built for throughput, trust, and scale."
        />

        <div className="flex flex-wrap gap-2">
          {projectTypes.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm transition ${activeFilter === filter ? 'bg-sky-400 text-slate-950' : 'border border-white/10 bg-white/5 text-slate-200 hover:border-sky-400/50'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
            className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5"
          >
            <div className="h-56 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.25),transparent_30%),linear-gradient(135deg,rgba(37,99,235,0.35),rgba(15,23,42,0.9))] p-6">
              <div className="grid h-full place-items-center rounded-[18px] border border-white/10 bg-slate-950/40">
                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.45em] text-sky-200">{project.type}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
                </div>
              </div>
            </div>
            <div className="space-y-4 p-5">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-[11px] text-sky-100">
                    {tag}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.36em] text-sky-300">Business Problem</p>
                <p className="mt-2 text-sm text-slate-300">{project.problem}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.36em] text-sky-300">Solution</p>
                <p className="mt-2 text-sm text-slate-300">{project.solution}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.36em] text-sky-300">Architecture</p>
                <p className="mt-2 text-sm text-slate-300">{project.architecture}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.36em] text-sky-300">Key Features</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span key={feature} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-3 text-sm text-emerald-100">
                {project.impact}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects
