import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              This Privacy Policy explains how PonyGlyph ("we," "us," or "our") collects, uses, and protects your personal information when you use our website and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-medium">Usage Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Browser and device information</li>
                <li>IP address and location data</li>
                <li>Cookies and similar technologies</li>
                <li>Interaction with our services</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>To provide and improve our services</li>
              <li>To process payments and bookings</li>
              <li>To communicate with you</li>
              <li>To ensure security and prevent fraud</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at privacy@ponyglyph.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}