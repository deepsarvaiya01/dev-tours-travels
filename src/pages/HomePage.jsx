import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'

const services = [
  {
    title: 'Tour Packages',
    description: 'Explore curated domestic and international travel packages at competitive prices.',
    icon: '🌍',
  },
  {
    title: 'Travel Booking',
    description: 'Book flights, hotels, transport, and activities with complete convenience.',
    icon: '✈️',
  },
  {
    title: 'Customized Trips',
    description: 'Create personalized travel plans based on your budget and preferences.',
    icon: '🧳',
  },
]

const testimonials = [
  {
    name: 'Aarav Mehta',
    location: 'Ahmedabad',
    message: 'The booking process was smooth and the trip was perfectly organized.',
  },
  {
    name: 'Priya Shah',
    location: 'Surat',
    message: 'Excellent service and support throughout our family vacation.',
  },
  {
    name: 'Rahul Patel',
    location: 'Vadodara',
    message: 'Great value packages and very professional team.',
  },
]

function HomePage() {
  return (
    <div className="space-y-16">
      <section className="rounded-2xl bg-gradient-to-r from-sky-600 to-emerald-500 px-6 py-16 text-center text-white shadow-lg sm:px-10">
        <h1 className="text-4xl font-extrabold sm:text-5xl">Dev Tourse and Travels</h1>
        <p className="mt-4 text-lg text-sky-50">Your Trusted Travel Partner</p>
        <Link
          to="/contact"
          className="mt-8 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-sky-700 shadow transition hover:bg-sky-50"
        >
          Explore Tours
        </Link>
      </section>

      <section>
        <SectionHeading title="Our Services" subtitle="Everything you need for a memorable journey." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeading title="Testimonials" subtitle="What our travelers say about us." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
