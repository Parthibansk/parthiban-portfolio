import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import { experience } from '../../data/experience'

const Experience = () => {
  return (
    <section id="experience" className="rounded-[32px] border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl">
      <SectionTitle
        eyebrow="Experience"
        title="A trajectory built for enterprise reliability."
      />

      <div className="mt-8 space-y-6">
        {experience.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
            className="relative rounded-[24px] border border-white/10 bg-white/5 p-6"
          >
            <div className="absolute left-5 top-6 h-3 w-3 rounded-full bg-sky-400" />
            <div className="pl-7">
              <p className="text-sm uppercase tracking-[0.36em] text-sky-200">{item.year}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.company}</p>
              <p className="mt-4 max-w-3xl text-slate-300">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
