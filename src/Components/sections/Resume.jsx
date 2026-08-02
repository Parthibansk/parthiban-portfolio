import Card from '../common/Card'

const resumePdf = new URL('../../Resume Parthiban.pdf', import.meta.url).href

const Resume = () => {
  return (
    <Card className="text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-sky-300">Resume</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">Selected capability profile</h3>
      <a href={resumePdf} download className="mt-5 inline-flex rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-5 py-3 text-sm font-semibold text-slate-950">
        Download Resume
      </a>
    </Card>
  )
}

export default Resume
