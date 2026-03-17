import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="mt-10 border-t border-sky-700/40 bg-gradient-to-r from-sky-700 to-emerald-600 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-white">Dev Tourse and Travels</h3>
          <p className="mt-2 text-sm text-sky-50">Your trusted travel partner for memorable journeys.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-sky-50">
            <li>
              <Link to="/" className="hover:text-white/80">Home</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white/80">Contact</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white/80">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white/80">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-sky-50">
            <li>Email: devtoursandtravels86@gmail.com</li>
            <li>Phone: +91 87358 61001 / +91 97732 53022</li>
            <li>Address: Tulasi Palace, 1st floor, Near gate, Madhuram road Junagadh, 362001, Gujarat, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 text-center text-xs text-sky-50">
        © {new Date().getFullYear()} Dev Tourse and Travels. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
