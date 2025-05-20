import React from 'react';

export function AntiDiscrimination() {
  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Anti-Discrimination Policy</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p className="text-gray-600 mb-4">
              PonyGlyph is committed to creating a platform where everyone feels welcome and respected, regardless of their race, religion, national origin, ethnicity, disability, sex, gender identity, sexual orientation, or age.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Zero Tolerance Policy</h2>
            <p className="text-gray-600 mb-4">
              We have zero tolerance for discrimination of any kind. All users of our platform must treat each other with respect and dignity.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>No discriminatory language or behavior</li>
              <li>No refusing service based on protected characteristics</li>
              <li>No hate speech or harassment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Reporting Discrimination</h2>
            <p className="text-gray-600 mb-4">
              If you experience or witness discrimination on our platform, please report it immediately. We take all reports seriously and will investigate thoroughly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}