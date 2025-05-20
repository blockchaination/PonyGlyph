import React from 'react';

export function Careers() {
  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Join Our Team</h1>
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Why PonyGlyph?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-orange-50 rounded-lg">
                <h3 className="font-semibold mb-2">Impact</h3>
                <p className="text-gray-600">
                  Help shape the future of sustainable tourism and cultural exchange.
                </p>
              </div>
              <div className="p-6 bg-orange-50 rounded-lg">
                <h3 className="font-semibold mb-2">Growth</h3>
                <p className="text-gray-600">
                  Continuous learning opportunities and career development.
                </p>
              </div>
              <div className="p-6 bg-orange-50 rounded-lg">
                <h3 className="font-semibold mb-2">Culture</h3>
                <p className="text-gray-600">
                  Diverse, inclusive workplace with a focus on work-life balance.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Senior Software Engineer</h3>
                <p className="text-gray-600 mb-4">
                  Build the next generation of our experience platform using modern technologies.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Full-time</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Remote</span>
                </div>
                <a href="#" className="text-orange-500 hover:text-orange-600">Apply Now →</a>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Community Manager</h3>
                <p className="text-gray-600 mb-4">
                  Help grow and nurture our community of guides and travelers.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Full-time</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Hybrid</span>
                </div>
                <a href="#" className="text-orange-500 hover:text-orange-600">Apply Now →</a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Health & Wellness</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Comprehensive health insurance</li>
                  <li>Mental health support</li>
                  <li>Wellness programs</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Growth & Development</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Learning budget</li>
                  <li>Conference attendance</li>
                  <li>Mentorship programs</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}