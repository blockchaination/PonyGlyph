import React from 'react';

export function MerchantResources() {
  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Merchant Resources</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Business Tools</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Calendar Management</h3>
                <p className="text-gray-600">Efficiently manage your bookings and availability</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Payment Processing</h3>
                <p className="text-gray-600">Secure and reliable payment solutions</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600">Track your performance and earnings</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Marketing Tools</h3>
                <p className="text-gray-600">Promote your experiences effectively</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Guides and Resources</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <div className="flex-1">
                  <h3 className="font-medium">Host Handbook</h3>
                  <p className="text-gray-600">Complete guide to hosting successful experiences</p>
                </div>
                <button className="text-orange-500 hover:text-orange-600">Download</button>
              </li>
              <li className="flex items-center space-x-4">
                <div className="flex-1">
                  <h3 className="font-medium">Safety Guidelines</h3>
                  <p className="text-gray-600">Essential safety protocols and best practices</p>
                </div>
                <button className="text-orange-500 hover:text-orange-600">Download</button>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}