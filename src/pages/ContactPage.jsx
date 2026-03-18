import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

function ContactPage() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const validationErrors = {}

    if (!formData.name.trim()) validationErrors.name = 'Name is required.'
    if (!formData.email.trim()) validationErrors.email = 'Email is required.'
    if (!formData.phone.trim()) validationErrors.phone = 'Phone is required.'
    if (!formData.message.trim()) validationErrors.message = 'Message is required.'

    return validationErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = validateForm()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
      setFormData(initialForm)
    } else {
      setSubmitted(false)
    }
  }

  return (
    <div className="space-y-10">
      <SectionHeading
        title="Contact Us"
        subtitle="Share your travel requirements and our team will connect with you soon."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
              {errors.name ? <p className="mt-1 text-sm text-red-600">{errors.name}</p> : null}
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
              {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email}</p> : null}
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
              {errors.phone ? <p className="mt-1 text-sm text-red-600">{errors.phone}</p> : null}
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
              {errors.message ? <p className="mt-1 text-sm text-red-600">{errors.message}</p> : null}
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 rounded-md bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Send Message
          </button>

          {submitted ? (
            <p className="mt-4 text-sm text-emerald-700">Form submitted successfully.</p>
          ) : null}
        </form>

        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Business Details</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>
                <strong>UDYAM REGISTRATION NUMBER:</strong> UDYAM-GJ-11-0026777
              </li>
              <li>
                <strong>CONTACT NUMBER:</strong> +91 87358 61001 / +91 97732 53022
              </li>
              <li>
                <strong>NAME OF ENTERPRISE:</strong> DEV TOURS & TRAVELS
              </li>
              <li>
                <strong>OFFICIAL ADDRESS OF ENTERPRISE:</strong> Tulsi Palace, 1st floor, Near
                gate, Madhuram road Junagadh, 362001, Gujarat, India
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <iframe
              title="Google Maps location"
              src="https://www.google.com/maps?q=21.501951,70.429535&output=embed"
              loading="lazy"
              className="h-64 w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
