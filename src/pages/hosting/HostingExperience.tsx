import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import { AuthModal } from '../../components/AuthModal';
import { ArrowRight, Award, Globe, Users, Calendar, Camera, DollarSign, CheckCircle } from 'lucide-react';

export function HostingExperience() {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleGetStarted = () => {
    if (user) {
      navigate('/create-experience');
    } else {
      setShowAuthModal(true);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1539635278303-d4002c07eae3)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center text-white max-w-2xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Share Your Passion</h1>
            <p className="text-xl mb-8">Turn your expertise into unforgettable experiences</p>
            <button
              onClick={handleGetStarted}
              className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition group"
            >
              Start Hosting
              <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How to List Your Experience</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Create Your Account</h3>
            <p className="text-gray-600">Sign up as a host and complete your profile with your expertise and credentials.</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Design Your Experience</h3>
            <p className="text-gray-600">Describe your experience, set pricing, and define what makes it unique.</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Set Your Schedule</h3>
            <p className="text-gray-600">Choose your availability and manage your bookings flexibly.</p>
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Need</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <Camera className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">High-Quality Photos</h3>
                <p className="text-gray-600">Upload clear, attractive images that showcase your experience.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <DollarSign className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Pricing Strategy</h3>
                <p className="text-gray-600">Set competitive prices that reflect the value of your experience.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Award className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Relevant Credentials</h3>
                <p className="text-gray-600">Provide any certifications or qualifications related to your experience.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Safety Measures</h3>
                <p className="text-gray-600">Outline your safety protocols and emergency procedures.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Share Your Experience?</h2>
          <p className="text-xl mb-8">Join our community of hosts and start earning by sharing what you love.</p>
          <button
            onClick={handleGetStarted}
            className="inline-flex items-center justify-center bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition group"
          >
            Get Started
            <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </div>
  );
}