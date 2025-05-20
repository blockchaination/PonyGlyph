import React from 'react';

export function TermsOfService() {
  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing or using PonyGlyph's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                You must create an account to use certain features of our services. You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintaining the confidentiality of your account</li>
                <li>All activities that occur under your account</li>
                <li>Providing accurate and complete information</li>
                <li>Updating your information as needed</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Booking and Payments</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                When booking experiences through our platform:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All payments must be made through our secure payment system</li>
                <li>Prices are subject to change without notice</li>
                <li>Cancellation policies vary by experience</li>
                <li>Refunds are processed according to our refund policy</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Conduct</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Submit false or misleading information</li>
                <li>Interfere with the proper functioning of the service</li>
                <li>Engage in discriminatory behavior</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All content and materials available on PonyGlyph are protected by intellectual property rights. You may not use, reproduce, or distribute our content without authorization.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              PonyGlyph is not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of any changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}