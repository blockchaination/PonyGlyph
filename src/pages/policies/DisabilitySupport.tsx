import React from 'react';

export function DisabilitySupport() {
  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Disability Support</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Accessibility Commitment</h2>
            <p className="text-gray-600 mb-4">
              PonyGlyph is committed to making our experiences accessible to travelers with disabilities. We work with hosts to provide clear information about accessibility features and accommodations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Available Support</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Detailed accessibility information for each experience</li>
              <li>Support for service animals</li>
              <li>Assistance with finding accessible transportation</li>
              <li>Communication support for deaf or hard-of-hearing travelers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you need any specific accommodations or have questions about accessibility, please contact our dedicated support team:
            </p>
            <p className="text-gray-600">Email: accessibility@ponyglyph.com</p>
            <p className="text-gray-600">Phone: +212 5XX-XXXXXX</p>
          </section>
        </div>
      </div>
    </div>
  );
}