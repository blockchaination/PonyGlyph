import React from 'react';

export function AboutUs() {
  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About PonyGlyph</h1>
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2025, PonyGlyph was born from a passion for authentic travel experiences and a desire to connect travelers with the rich cultural heritage of Morocco. Our platform brings together local guides and global adventurers, creating meaningful connections and unforgettable experiences.
            </p>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3"
                alt="Moroccan landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
            <div className="bg-orange-50 p-6 rounded-lg">
              <p className="text-gray-800 text-lg">
                To promote sustainable tourism that enriches both travelers and local communities, while preserving and celebrating Morocco's cultural heritage.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white shadow-sm rounded-lg">
                <h3 className="font-semibold mb-2">Authenticity</h3>
                <p className="text-gray-600">
                  We celebrate and promote genuine cultural experiences and connections.
                </p>
              </div>
              <div className="p-6 bg-white shadow-sm rounded-lg">
                <h3 className="font-semibold mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We prioritize responsible tourism that benefits local communities.
                </p>
              </div>
              <div className="p-6 bg-white shadow-sm rounded-lg">
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We leverage technology to create better travel experiences.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Our Impact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">1000+</div>
                <p className="text-gray-600">Local guides empowered</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
                <p className="text-gray-600">Communities supported</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}