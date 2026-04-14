import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedCards from './components/FeaturedCards'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Process from './components/Process'
import Stats from './components/Stats'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Background Video with Overlay */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.65)' }}
        >
          <source src="https://videos.pexels.com/video-files/3571210/3571210-sd_640_360_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <FeaturedCards />
        <Marquee />
        <Services />
        <Process />
        <Stats />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}
