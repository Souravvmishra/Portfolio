import Footer from '@/components/Footer'
import FreedomSection from '@/components/FreedomSection'
import Hero from '@/components/Hero'
import RippleEffect from '@/components/Favourite'
import Sliding from '@/components/Sliding'
import Testimonial from '@/components/Testimonial'
import TheBestPlatform from '@/components/TheBestPlatform'
import Thinking from '@/components/Thinking'

export default function Home() {
  return (
    <div className='container overflow-hidden mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32'>
      <Hero />
      <Thinking />
      <Sliding />
      <FreedomSection />
      <TheBestPlatform />
      <RippleEffect />
      <Testimonial />
      <Footer />
    </div>
  )
}
