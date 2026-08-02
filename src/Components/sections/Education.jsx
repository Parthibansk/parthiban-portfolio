import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import { education } from '../../data/education'

const Education = () => {
  return (
    <section id="education" className="rounded-[32px] border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl">
      <SectionTitle
        eyebrow="Education"
        title="Academic foundation behind the engineering practice."
      />

      <div className="mt-8 space-y-5">
        {education.map((item, index) => (
          <motion.article
            key={`${item.degree}-${item.institution}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
            className="rounded-[24px] border border-white/10 bg-white/5 p-6"
          >
            <p className="text-sm uppercase tracking-[0.34em] text-sky-200">{item.period}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{item.degree}</h3>
            <p className="mt-2 text-slate-300">{item.institution}</p>
            <p className="mt-4 max-w-3xl text-slate-300">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Education
