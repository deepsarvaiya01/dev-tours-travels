import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'

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

const travelGallery = [
  {
    title: 'Taj Mahal, Agra',
    image:
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Jaipur, Rajasthan',
    image:
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Kolkata, West Bengal',
    image:
      'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'South India Temples',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/1000_years_Old_Thanjavur_Brihadeeshwara_Temple_View_at_Sunrise.jpg',
  },
  {
    title: 'Meenakshi Temple, Madurai',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Meenakshi_Amman_West_Tower.jpg',
  },
  {
    title: 'Jammu & Kashmir',
    image:
      'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Nepal Himalayas',
    image:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Gujarat Heritage',
    image:
      'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Maharashtra Coastline',
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
  },
]

function HomePage() {
  return (
    <div className="space-y-16">
      <section className="rounded-2xl bg-gradient-to-r from-sky-600 to-emerald-500 px-6 py-16 text-center text-white shadow-lg sm:px-10">
        <h1 className="text-4xl font-extrabold sm:text-5xl">DEV TOURS & TRAVELS</h1>
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
        <SectionHeading title="Travel Inspiration" subtitle="Handpicked destinations for your next trip." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {travelGallery.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="bg-white p-4">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
