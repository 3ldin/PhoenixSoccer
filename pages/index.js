import Navbar from '@/components/navbar'
import Hero from '../components/Hero'
import About from '../components/Approach'
import Footer from '../components/Footer'
import Location from '../components/Location'
import Testimonials from '../components/Testimonials'
import testimonialsData from '../components/testimonialsData'
import Gallery from '../components/Gallery'




export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col w-full`}
    >
      <Navbar/>
      <div className='container w-full'>
      <Hero />
      <About />
      <Location />
      <Gallery />
      <Testimonials testimonials={testimonialsData} />
      <Footer />
      </div>
    </main>
  )
}
