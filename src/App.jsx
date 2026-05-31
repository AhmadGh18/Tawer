import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ValueProp from './components/ValueProp.jsx'
import Services from './components/Services.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-paper-tint text-ink">
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <Services />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
