import { motion } from 'framer-motion'
import Card from '../common/Card'
import SectionTitle from '../common/SectionTitle'

const About = () => {
  return (
    <section id="about" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Card>
          <SectionTitle
            eyebrow="About"
            title="Enterprise-grade .NET delivery with measurable business impact."
          />
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Card>
          <p className="text-lg leading-8 text-slate-300">
            Senior .NET Developer with 10+ years of experience designing, developing, and deploying scalable enterprise applications using .NET Core, ASP.NET MVC, Razor, C#, and SQL Server. My career spans SaaS platforms, financial systems, healthcare applications, and data-driven solutions across high-availability business environments. I have delivered secure, maintainable software through strong expertise in REST APIs, database performance tuning, CI/CD pipelines, Azure deployments, and cross-functional delivery. My experience includes modernizing mission-critical platforms, integrating third-party systems, supporting production stability, and improving decision-making through dashboards, reporting, and quality-focused engineering practices.
          </p>
        </Card>
      </motion.div>
    </section>
  )
}

export default About
