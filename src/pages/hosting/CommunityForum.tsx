import React from 'react';

export function CommunityForum() {
  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Community Forum</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Connect with Other Hosts</h2>
            <p className="text-gray-600 mb-4">
              Join our vibrant community of hosts to share experiences, tips, and best practices. Learn from experienced hosts and grow your business together.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Popular Topics</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Getting Started</h3>
                <p className="text-gray-600">Tips and advice for new hosts</p>
                <div className="mt-2 text-sm text-gray-500">324 discussions</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Marketing Strategies</h3>
                <p className="text-gray-600">Share successful promotion techniques</p>
                <div className="mt-2 text-sm text-gray-500">156 discussions</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Guest Experience</h3>
                <p className="text-gray-600">Creating memorable experiences</p>
                <div className="mt-2 text-sm text-gray-500">289 discussions</div>
              </div>
            </div>
          </section>

          <div className="mt-8">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
              Join the Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}