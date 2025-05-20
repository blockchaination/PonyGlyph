import React from 'react';

export function CancellationOptions() {
  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Cancellation Options</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Cancellation Policies</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Flexible</h3>
                <p className="text-gray-600">Full refund up to 24 hours before the experience</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Moderate</h3>
                <p className="text-gray-600">Full refund up to 5 days before the experience</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Strict</h3>
                <p className="text-gray-600">50% refund up to 7 days before the experience</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Cancel</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li>Go to your bookings</li>
              <li>Select the experience you want to cancel</li>
              <li>Click the "Cancel Booking" button</li>
              <li>Follow the prompts to complete the cancellation</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}