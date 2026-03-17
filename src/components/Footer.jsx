import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Dev Tourse and Travels</h3>
          <p className="mt-2 text-sm text-slate-600">Your trusted travel partner for memorable journeys.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link to="/" className="hover:text-sky-700">Home</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-sky-700">Contact</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-sky-700">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-sky-700">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Email: info@devtours.in</li>
            <li>Phone: +91-00000-00000</li>
            <li>Address: [ADD ADDRESS]</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Dev Tourse and Travels. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
