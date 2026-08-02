import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import SectionTitle from '../common/SectionTitle'
import { initEmailJS, sendPortfolioEmail } from '../../utils/email'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })

  useEffect(() => {
    initEmailJS()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: 'pending', message: 'Sending message…' })

    try {
      await sendPortfolioEmail(formData)
      setStatus({ type: 'success', message: 'Your message has been sent successfully.' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Unable to send message right now.' })
    }
  }
  return (
    <section id="contact" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-[30px] border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl"
      >
        <SectionTitle
          eyebrow="Contact"
          title="Start a meaningful software conversation."
        />
        <div className="mt-6 space-y-3 text-slate-300">
          <div className="flex items-center gap-3"><FaEnvelope /> parthibansk007@gmail.com</div>
          <div className="flex items-center gap-3">
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/parthiban-k-68b13522a" target="_blank" rel="noreferrer" className="transition hover:text-white">
              www.linkedin.com/in/parthiban-k-68b13522a
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaGithub />
            <a href="https://github.com/Parthibansk" target="_blank" rel="noreferrer" className="transition hover:text-white">
              https://github.com/Parthibansk
            </a>
          </div>
          <div className="flex items-center gap-3"><FaWhatsapp /> +91 9659096766</div>
          <div className="flex items-center gap-3"><FaMapMarkerAlt /> Thiruvadanai, Ramanathapuram District, Tamil Nadu, India</div>
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        onSubmit={handleSubmit}
        className="rounded-[30px] border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm text-slate-300">
            <span className="mb-2 block">Name</span>
            <input
              value={formData.name}
              onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 outline-none ring-0 transition focus:border-sky-400"
              placeholder="Your name"
              required
            />
          </label>
          <label className="text-sm text-slate-300">
            <span className="mb-2 block">Email</span>
            <input
              type="email"
              value={formData.email}
              onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 outline-none ring-0 transition focus:border-sky-400"
              placeholder="hello@company.com"
              required
            />
          </label>
        </div>
        <label className="mt-4 block text-sm text-slate-300">
          <span className="mb-2 block">Project Brief</span>
          <textarea
            value={formData.message}
            onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
            className="min-h-40 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 outline-none ring-0 transition focus:border-sky-400"
            placeholder="Describe the business challenge, timeline, and expected outcomes."
            required
          />
        </label>
        <button type="submit" className="mt-5 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-5 py-3 text-sm font-semibold text-slate-950">
          Send Inquiry
        </button>
        {status.message ? (
          <p className={`mt-3 text-sm ${status.type === 'success' ? 'text-emerald-300' : status.type === 'error' ? 'text-rose-300' : 'text-sky-200'}`}>
            {status.message}
          </p>
        ) : null}
      </motion.form>
    </section>
  )
}

export default Contact
