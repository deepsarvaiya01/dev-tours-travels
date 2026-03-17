import SectionHeading from '../components/SectionHeading'

function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <SectionHeading title="Privacy Policy" subtitle="Last updated: 17 March 2026" />

      <div className="space-y-6 text-slate-700">
        <section>
          <h3 className="text-xl font-semibold text-slate-900">1. Data Collection</h3>
          <p className="mt-2">
            We may collect personal information such as your name, email address, phone number,
            and travel preferences when you contact us or use our services.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900">2. Use of Data</h3>
          <p className="mt-2">
            Your data is used to provide travel services, process bookings, send updates, and
            improve customer support. We do not sell your personal data.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900">3. Cookies</h3>
          <p className="mt-2">
            Our website may use cookies to enhance user experience, remember preferences, and
            analyze traffic patterns for better service quality.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900">4. Security</h3>
          <p className="mt-2">
            We apply reasonable technical and organizational safeguards to protect your information.
            However, no online transmission or storage method is 100% secure.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900">5. User Rights</h3>
          <p className="mt-2">
            You may request access, correction, or deletion of your personal data by contacting us.
            You can also withdraw consent for promotional communication at any time.
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage
