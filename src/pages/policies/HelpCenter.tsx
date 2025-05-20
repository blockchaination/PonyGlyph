import React from 'react';

export function HelpCenter() {
  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Help Center</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">How do I book an experience?</h3>
                <p className="text-gray-600">Select your desired experience, choose your preferred date and number of participants, and proceed with the booking. You'll receive a confirmation email once the booking is complete.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">What if I need to cancel?</h3>
                <p className="text-gray-600">Cancellation policies vary by experience. You can find the specific policy on each experience's page. Generally, full refunds are available if cancelled 24 hours before the start time.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
            <p className="text-gray-600 mb-4">Our support team is available 24/7 to assist you with any questions or concerns.</p>
            <div className="space-y-2">
              <p className="text-gray-600">Email: support@ponyglyph.com</p>
              <p className="text-gray-600">Phone: +212 5XX-XXXXXX</p>
              <p className="text-gray-600">WhatsApp: +212 6XX-XXXXXX</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}