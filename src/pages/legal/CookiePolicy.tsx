import React from 'react';

export function CookiePolicy() {
  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
                <p className="text-gray-600">
                  Required for the website to function properly. These cannot be disabled.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Performance Cookies</h3>
                <p className="text-gray-600">
                  Help us understand how visitors interact with our website.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Functionality Cookies</h3>
                <p className="text-gray-600">
                  Remember your preferences and settings.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Marketing Cookies</h3>
                <p className="text-gray-600">
                  Track your activity across websites to deliver personalized advertising.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p className="text-gray-600 mb-4">
              You can control and manage cookies in your browser settings. Please note that removing or blocking cookies may impact your user experience.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">How to Manage Cookies</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Chrome: Settings → Privacy and Security → Cookies</li>
                <li>Firefox: Options → Privacy & Security → Cookies</li>
                <li>Safari: Preferences → Privacy → Cookies</li>
                <li>Edge: Settings → Privacy & Security → Cookies</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
            <p className="text-gray-600">
              We may update this Cookie Policy from time to time. Please check back regularly to stay informed about our use of cookies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}