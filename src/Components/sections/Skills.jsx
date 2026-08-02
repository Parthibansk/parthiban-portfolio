import { motion } from 'framer-motion'
import Card from '../common/Card'
import SectionTitle from '../common/SectionTitle'
import { skills } from '../../data/skills'

const Skills = () => {
  return (
    <section id="skills" className="rounded-[32px] border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl">
      <SectionTitle
        eyebrow="Skills"
        title="Platform architecture across the full digital lifecycle."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <motion.div
            key={skill.title}
            whileHover={{ y: -6 }}
            className="rounded-[24px] border border-white/10 bg-white/5 p-5"
          >
            <div className={`mb-4 h-24 rounded-2xl bg-gradient-to-r ${skill.accent}`} />
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              <span className="text-sm text-sky-200">{skill.progress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.progress}%` }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {skill.points.map((point) => (
                <span key={point} className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-slate-200">
                  {point}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
