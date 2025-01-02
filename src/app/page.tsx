import { Features } from "@/components/features"
import { Hero } from "@/components/hero"
import { NotesSharing } from "@/components/notes-sharing"
import { Resources } from "@/components/resources"
import { Testimonials } from "@/components/testimonials"
import { CallToAction } from "@/components/call-to-action"
import { ConversionSection } from "@/components/conversion-section"
import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar/>
      <HeroSection/>
      <Hero />
      <Features />
      <NotesSharing />
      <Resources />
      <Testimonials />
      <CallToAction />
      <ConversionSection />
    </main>
  )
}

