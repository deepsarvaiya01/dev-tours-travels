import SectionHeading from '../components/SectionHeading'

function TermsConditionsPage() {
  return (
    <div className="mx-auto max-w-4xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <SectionHeading title="Terms & Conditions" subtitle="Last updated: 17 March 2026" />

      <div className="space-y-6 text-slate-700">
        <section>
          <h3 className="text-xl font-semibold text-slate-900">1. Acceptance of Terms</h3>
          <p className="mt-2">
            By using this website or booking services through DEV TOURS & TRAVELS, you agree to
            these Terms & Conditions and applicable laws.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900">2. Booking Terms</h3>
          <p className="mt-2">
            All bookings are subject to availability and confirmation from our team and service
            providers. Customers must provide accurate information during booking.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900">3. Payment Policy</h3>
          <p className="mt-2">
            A partial or full advance payment may be required to confirm reservations. Final payment
            timelines will be shared at the time of booking. Any bank/payment gateway charges are
            borne by the customer unless otherwise stated.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900">4. Cancellation and Refund Policy</h3>
          <p className="mt-2">
            Cancellation charges may apply based on booking type and cancellation date. Refunds, if
            eligible, will be processed according to supplier and internal policies.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900">5. Pricing and Changes</h3>
          <p className="mt-2">
            Prices may change due to currency fluctuations, supplier updates, taxes, or government
            regulations. Confirmed bookings remain subject to supplier terms.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900">6. Travel Documents and Compliance</h3>
          <p className="mt-2">
            Travelers are responsible for valid identification, passport, visa, insurance, and
            health-related documentation required for travel.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900">7. Liability Disclaimer</h3>
          <p className="mt-2">
            DEV TOURS & TRAVELS acts as an intermediary between travelers and third-party service
            providers. We are not liable for delays, cancellations, losses, or incidents caused by
            factors beyond our reasonable control.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900">8. Force Majeure</h3>
          <p className="mt-2">
            We are not responsible for service interruptions caused by events beyond control,
            including natural disasters, political unrest, strikes, epidemics, or transport failures.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900">9. Governing Law</h3>
          <p className="mt-2">
            These terms are governed by the laws of India. Disputes are subject to the jurisdiction
            of competent courts in Gujarat.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900">10. Contact Details</h3>
          <p className="mt-2">
            DEV TOURS & TRAVELS<br />
            UDYAM Registration Number: UDYAM-GJ-11-0026777<br />
            Email: devtoursandtravels86@gmail.com<br />
            Phone: +91 87358 61001 / +91 97732 53022<br />
            Address: Tulsi Palace, 1st floor, Near gate, Madhuram road Junagadh, 362001, Gujarat,
            India
          </p>
        </section>
      </div>
    </div>
  )
}

export default TermsConditionsPage
