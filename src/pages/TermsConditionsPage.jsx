import SectionHeading from '../components/SectionHeading'

function TermsConditionsPage() {
  return (
    <div className="mx-auto max-w-4xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <SectionHeading title="Terms & Conditions" subtitle="Last updated: 17 March 2026" />

      <div className="space-y-6 text-slate-700">
        <section>
          <h3 className="text-xl font-semibold text-slate-900">1. Booking Terms</h3>
          <p className="mt-2">
            All bookings are subject to availability and confirmation from our team and service
            providers. Customers must provide accurate information during booking.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900">2. Payment Policy</h3>
          <p className="mt-2">
            A partial or full advance payment may be required to confirm reservations. Final payment
            timelines will be shared at the time of booking.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900">3. Cancellation/Refund Policy</h3>
          <p className="mt-2">
            Cancellation charges may apply based on booking type and cancellation date. Refunds, if
            eligible, will be processed according to supplier and internal policies.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900">4. Liability Disclaimer</h3>
          <p className="mt-2">
            Dev Tourse and Travels acts as an intermediary between travelers and third-party service
            providers. We are not liable for delays, cancellations, losses, or incidents caused by
            factors beyond our reasonable control.
          </p>
        </section>
      </div>
    </div>
  )
}

export default TermsConditionsPage
