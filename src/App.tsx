import { Navbar } from "./components/navigation/Navbar"
import { Footer } from "./components/navigation/Footer"
import { Hero } from "./components/sections/Hero"
import { AboutPreview } from "./components/sections/AboutPreview"
import { FeaturedProjects } from "./components/sections/FeaturedProjects"
import { Expertise } from "./components/sections/Expertise"
import { Contact } from "./components/sections/Contact"
import SmoothScroll from "./components/common/SmoothScroll"
import { NoiseGrain } from "./components/common/NoiseGrain"

function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background text-foreground selection:bg-accent-blue selection:text-white pb-20">
        {/* Film grain effect */}
        <NoiseGrain />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Sections */}
        <main className="relative">
          <Hero />
          <AboutPreview />
          <FeaturedProjects />
          <Expertise />
          <Contact />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
