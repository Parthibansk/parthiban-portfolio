import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollToTop from '../components/layout/ScrollToTop'

const MainLayout = ({ theme, onToggleTheme, children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-sky-500/30 selection:text-white">
      <ScrollToTop />
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
        <div className="h-full w-[40%] bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 shadow-[0_0_40px_rgba(56,189,248,0.8)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <Navbar theme={theme} onToggleTheme={onToggleTheme} />
        <main className="space-y-10">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
