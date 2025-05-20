import React from 'react';

export function Contact() {
  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">General Inquiries</h3>
                  <p className="text-gray-600">info@ponyglyph.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Support</h3>
                  <p className="text-gray-600">support@ponyglyph.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Business Development</h3>
                  <p className="text-gray-600">partnerships@ponyglyph.com</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Office</h3>
                  <p className="text-gray-600">
                    123 Digital Hub<br />
                    Tech Valley<br />
                    Casablanca, Morocco
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">+212 5XX-XXXXXX</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  rows={6}
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}