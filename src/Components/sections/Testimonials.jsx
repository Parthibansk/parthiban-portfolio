import { motion } from 'framer-motion'

const strengths = [
  {
    title: 'Core delivery domains',
    body: 'healthcare, finance, and data modernization solutions.',
  },
  {
    title: 'Technology stack',
    body: '.NET Core, ASP.NET MVC, Razor, C#, SQL Server, Azure, and CI/CD automation.',
  },
]

const Testimonials = () => {
  return (
    <section className="rounded-[32px] border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl">
      <p className="text-xs uppercase tracking-[0.4em] text-sky-300">Professional strengths</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {strengths.map((item) => (
          <motion.article
            key={item.title}
            whileHover={{ y: -4 }}
            className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-slate-200"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-lg leading-8">{item.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
