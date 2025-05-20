import React from 'react';

export function ReportConcern() {
  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Report a Concern</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Report</h2>
            <p className="text-gray-600 mb-4">
              If you encounter any issues during your experience or have concerns about a host or guest, please report it immediately. We take all reports seriously and will investigate thoroughly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">What to Report</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Safety concerns</li>
              <li>Discrimination or harassment</li>
              <li>Misrepresented experiences</li>
              <li>Payment issues</li>
              <li>Property damage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Emergency Situations</h2>
            <p className="text-gray-600 mb-4">
              For immediate assistance in emergency situations:
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">Emergency Hotline: +212 5XX-XXXXXX</p>
              <p className="text-gray-600">Police: 190</p>
              <p className="text-gray-600">Ambulance: 150</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}