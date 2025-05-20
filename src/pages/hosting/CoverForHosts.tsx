import React from 'react';

export function CoverForHosts() {
  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Host Protection Coverage</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Coverage Overview</h2>
            <p className="text-gray-600 mb-4">
              Our Host Protection Coverage provides comprehensive protection for your hosting activities, giving you peace of mind while sharing your experiences with guests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">What's Covered</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Liability coverage up to €1,000,000</li>
              <li>Property damage protection</li>
              <li>Accident insurance for guests</li>
              <li>Cancellation protection</li>
              <li>Emergency assistance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How to File a Claim</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li>Report the incident within 24 hours</li>
              <li>Provide necessary documentation</li>
              <li>Submit photos or videos if applicable</li>
              <li>Work with our claims team</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}