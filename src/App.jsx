import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import Loader from './components/common/Loader'
import MainLayout from './layouts/MainLayout'

const Hero = lazy(() => import('./components/sections/Hero'))
const About = lazy(() => import('./components/sections/About'))
const Skills = lazy(() => import('./components/sections/Skills'))
const Experience = lazy(() => import('./components/sections/Experience'))
const Services = lazy(() => import('./components/sections/Services'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Achievements = lazy(() => import('./components/sections/Achievements'))
const Testimonials = lazy(() => import('./components/sections/Testimonials'))
const Education = lazy(() => import('./components/sections/Education'))
const Contact = lazy(() => import('./components/sections/Contact'))
const Resume = lazy(() => import('./components/sections/Resume'))

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  const [isLoaded, setIsLoaded] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [typedText, setTypedText] = useState('')

  const typedWords = useMemo(
    () => [
      'Senior .NET Developer',
      'Enterprise Application Engineer',
      'Azure & SQL Delivery Specialist',
    ],
    [],
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const loaderTimeout = window.setTimeout(() => setIsLoaded(true), 900)
    return () => window.clearTimeout(loaderTimeout)
  }, [])

  useEffect(() => {
    let wordIndex = 0
    let charIndex = 0
    let reverse = false

    const interval = window.setInterval(() => {
      const word = typedWords[wordIndex]
      if (!reverse) {
        setTypedText(word.slice(0, charIndex + 1))
        charIndex += 1
        if (charIndex === word.length) {
          reverse = true
          window.setTimeout(() => {
            reverse = false
          }, 1200)
        }
      } else {
        setTypedText(word.slice(0, charIndex - 1))
        charIndex -= 1
        if (charIndex === 0) {
          reverse = false
          wordIndex = (wordIndex + 1) % typedWords.length
        }
      }
    }, 90)

    return () => window.clearInterval(interval)
  }, [typedWords])

  useEffect(() => {
    const onMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-sky-500/30 selection:text-white">
      {!isLoaded ? (
        <div className="fixed inset-0 z-[120] grid place-items-center bg-slate-950/95 backdrop-blur-2xl">
          <Loader />
        </div>
      ) : null}

      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-70"
        style={{
          background:
            'radial-gradient(circle at ' + cursor.x + 'px ' + cursor.y + 'px, rgba(56,189,248,0.18), transparent 12%)',
        }}
      />

      <MainLayout theme={theme} onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}>
        <Suspense fallback={<Loader />}>
          <Hero typedText={typedText} />
          <About />
          <Skills />
          <Experience />
          <Services />
          <Projects />
          <Achievements />
          <Testimonials />
          <Education />
          <Resume />
          <Contact />
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default App
