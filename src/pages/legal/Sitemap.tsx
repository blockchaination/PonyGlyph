import React from 'react';
import { Link } from 'react-router-dom';

export function Sitemap() {
  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Main Pages</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-orange-500 hover:text-orange-600">Home</Link>
              </li>
              <li>
                <Link to="/experiences" className="text-orange-500 hover:text-orange-600">Experiences</Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Support</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/help-center" className="text-gray-600 hover:text-gray-900">Help Centre</Link>
              </li>
              <li>
                <Link to="/anti-discrimination" className="text-gray-600 hover:text-gray-900">Anti-discrimination</Link>
              </li>
              <li>
                <Link to="/disability-support" className="text-gray-600 hover:text-gray-900">Disability Support</Link>
              </li>
              <li>
                <Link to="/cancellation-options" className="text-gray-600 hover:text-gray-900">Cancellation Options</Link>
              </li>
              <li>
                <Link to="/report-concern" className="text-gray-600 hover:text-gray-900">Report Concern</Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Hosting</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/hosting-experience" className="text-gray-600 hover:text-gray-900">Hosting an Experience</Link>
              </li>
              <li>
                <Link to="/cover-for-hosts" className="text-gray-600 hover:text-gray-900">Cover for Hosts</Link>
              </li>
              <li>
                <Link to="/merchant-resources" className="text-gray-600 hover:text-gray-900">Merchant Resources</Link>
              </li>
              <li>
                <Link to="/community-forum" className="text-gray-600 hover:text-gray-900">Community Forum</Link>
              </li>
              <li>
                <Link to="/hosting-responsibly" className="text-gray-600 hover:text-gray-900">Hosting Responsibly</Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">About</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900">How it Works</Link>
              </li>
              <li>
                <Link to="/newsroom" className="text-gray-600 hover:text-gray-900">Newsroom</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-600 hover:text-gray-900">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Legal</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-600 hover:text-gray-900">Terms of Service</Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-600 hover:text-gray-900">Cookie Policy</Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}