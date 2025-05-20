import React from 'react';

export function HowItWorks() {
  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">How PonyGlyph Works</h1>
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Discover Unique Experiences</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-orange-50 rounded-lg">
                <div className="text-orange-500 text-xl font-semibold mb-3">1. Browse</div>
                <p className="text-gray-600">
                  Explore our curated collection of authentic Moroccan experiences, from desert adventures to cultural workshops.
                </p>
              </div>
              <div className="p-6 bg-orange-50 rounded-lg">
                <div className="text-orange-500 text-xl font-semibold mb-3">2. Book</div>
                <p className="text-gray-600">
                  Choose your perfect experience and secure your spot with our easy booking system.
                </p>
              </div>
              <div className="p-6 bg-orange-50 rounded-lg">
                <div className="text-orange-500 text-xl font-semibold mb-3">3. Experience</div>
                <p className="text-gray-600">
                  Meet your local guide and immerse yourself in authentic Moroccan culture and adventures.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">For Travelers</h2>
            <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-medium">Safe and Secure</h3>
              <p className="text-gray-600">
                All experiences are vetted for quality and safety. Our secure payment system protects your booking.
              </p>
              <h3 className="text-xl font-medium">Local Expertise</h3>
              <p className="text-gray-600">
                Connect with knowledgeable local guides who share authentic insights and hidden gems.
              </p>
              <h3 className="text-xl font-medium">Flexible Booking</h3>
              <p className="text-gray-600">
                Easy cancellation options and 24/7 customer support for peace of mind.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">For Guides</h2>
            <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-medium">Share Your Passion</h3>
              <p className="text-gray-600">
                Create and host unique experiences that showcase your expertise and local knowledge.
              </p>
              <h3 className="text-xl font-medium">Grow Your Business</h3>
              <p className="text-gray-600">
                Access a global audience of travelers seeking authentic experiences.
              </p>
              <h3 className="text-xl font-medium">Easy Management</h3>
              <p className="text-gray-600">
                User-friendly tools to manage bookings, communicate with guests, and grow your business.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}