import { motion } from 'framer-motion'

const stats = [
  { value: 10, suffix: '+', label: 'Years of software delivery' },
  { value: 7, suffix: '+', label: 'Enterprise platforms delivered' },
  { value: 4, suffix: '+', label: 'Industry domains supported' },
  { value: 1, suffix: '', label: 'Immediate joiner availability' },
]

const Achievements = () => {
  return (
    <section className="grid gap-6 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: index * 0.08 }}
          className="rounded-[26px] border border-white/10 bg-slate-900/60 p-6 text-center backdrop-blur-xl"
        >
          <div className="text-4xl font-semibold text-white">{stat.value}{stat.suffix}</div>
          <p className="mt-3 text-sm text-slate-300">{stat.label}</p>
        </motion.div>
      ))}
    </section>
  )
}

export default Achievements
