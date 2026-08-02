import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa'
import SectionTitle from '../common/SectionTitle'
import { services } from '../../data/services'

const Services = () => {
  return (
    <section className="rounded-[32px] border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl">
      <SectionTitle
        eyebrow="Services"
        title="Digital execution that moves from strategy to outcomes."
      />

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <motion.div key={service} whileHover={{ y: -6 }} className="rounded-[22px] border border-white/10 bg-white/5 p-5">
            <div className="mb-4 inline-flex rounded-full bg-sky-500/15 p-3 text-sky-200">
              <FaCode />
            </div>
            <p className="text-lg font-semibold text-white">{service}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services
