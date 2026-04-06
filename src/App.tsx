import './App.css'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { Portfolio } from './components/Portfolio'
import { Pricing } from './components/Pricing'
import ScrollProgress from './components/ScrollProgress'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { Testimonials } from './components/Testimonials'
import { WhatsAppButton } from './components/WhatsAppButton'
import ThemeProvider from './hooks/ThemeProvider'
function App() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-white dark:bg-[#0A0A0F] transition-colors duration-300">
        <ScrollProgress />
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </ThemeProvider>
  )
}

export default App
