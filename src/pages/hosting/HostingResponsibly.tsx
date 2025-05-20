import React from 'react';

export function HostingResponsibly() {
  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Hosting Responsibly</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Sustainable Tourism</h2>
            <p className="text-gray-600 mb-4">
              As a host, you play a crucial role in promoting sustainable tourism. Learn how to minimize environmental impact while maximizing positive community impact.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Reduce waste and promote recycling</li>
              <li>Support local communities</li>
              <li>Preserve cultural heritage</li>
              <li>Protect natural environments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Safety Guidelines</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Emergency Preparedness</h3>
                <p className="text-gray-600">Maintain emergency contacts and first aid supplies</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Risk Assessment</h3>
                <p className="text-gray-600">Regularly evaluate and mitigate potential risks</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Insurance Coverage</h3>
                <p className="text-gray-600">Maintain appropriate insurance for your activities</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Community Guidelines</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Respect local customs and traditions</li>
              <li>Support local businesses</li>
              <li>Maintain good relationships with neighbors</li>
              <li>Follow local regulations and obtain necessary permits</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}