import React from 'react';

export function Newsroom() {
  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Newsroom</h1>
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Latest News</h2>
            <div className="space-y-6">
              <article className="border-b pb-6">
                <div className="text-sm text-gray-500 mb-2">March 15, 2025</div>
                <h3 className="text-xl font-semibold mb-2">
                  PonyGlyph Launches Sustainable Tourism Initiative
                </h3>
                <p className="text-gray-600 mb-4">
                  New program focuses on promoting eco-friendly experiences and supporting local communities across Morocco.
                </p>
                <a href="#" className="text-orange-500 hover:text-orange-600">Read more →</a>
              </article>
              
              <article className="border-b pb-6">
                <div className="text-sm text-gray-500 mb-2">February 28, 2025</div>
                <h3 className="text-xl font-semibold mb-2">
                  Expanding Cultural Exchange Programs
                </h3>
                <p className="text-gray-600 mb-4">
                  Partnership with local artisans brings traditional craftsmanship to global audiences.
                </p>
                <a href="#" className="text-orange-500 hover:text-orange-600">Read more →</a>
              </article>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Press Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Press Kit</h3>
                <p className="text-gray-600 mb-4">
                  Download official logos, images, and brand guidelines.
                </p>
                <a href="#" className="text-orange-500 hover:text-orange-600">Download →</a>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Media Inquiries</h3>
                <p className="text-gray-600 mb-4">
                  Get in touch with our media relations team.
                </p>
                <a href="mailto:press@ponyglyph.com" className="text-orange-500 hover:text-orange-600">
                  Contact →
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}