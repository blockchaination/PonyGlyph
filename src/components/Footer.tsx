import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Compass className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold tracking-wider">PONYGLYPH</span>
            </div>
            <p className="text-gray-400">
              Discover authentic Moroccan experiences with local experts.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-white">How it Works</Link></li>
              <li><Link to="/newsroom" className="text-gray-400 hover:text-white">Newsroom</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link to="/about-us" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hosting</h3>
            <ul className="space-y-2">
              <li><Link to="/hosting-experience" className="text-gray-400 hover:text-white">Host an Experience</Link></li>
              <li><Link to="/cover-for-hosts" className="text-gray-400 hover:text-white">Cover for Hosts</Link></li>
              <li><Link to="/merchant-resources" className="text-gray-400 hover:text-white">Merchant Resources</Link></li>
              <li><Link to="/community-forum" className="text-gray-400 hover:text-white">Community Forum</Link></li>
              <li><Link to="/hosting-responsibly" className="text-gray-400 hover:text-white">Hosting Responsibly</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help-center" className="text-gray-400 hover:text-white">Help Centre</Link></li>
              <li><Link to="/anti-discrimination" className="text-gray-400 hover:text-white">Anti-discrimination</Link></li>
              <li><Link to="/disability-support" className="text-gray-400 hover:text-white">Disability Support</Link></li>
              <li><Link to="/cancellation-options" className="text-gray-400 hover:text-white">Cancellation Options</Link></li>
              <li><Link to="/report-concern" className="text-gray-400 hover:text-white">Report Concern</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-white">Cookie Policy</Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white">Sitemap</Link>
            </div>
            <p className="text-gray-400">© 2025 PONYGLYPH. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}