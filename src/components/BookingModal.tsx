import React, { useState } from 'react';
import { X } from 'lucide-react';
import { format } from 'date-fns';
import { Experience } from '../types/experience';
import { useBookingStore } from '../stores/bookingStore';
import { useAuthStore } from '../stores/authStore';
import { PaymentForm } from './PaymentForm';
import { supabase } from '../lib/supabase';

interface BookingModalProps {
  experience: Experience;
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ experience, isOpen, onClose }: BookingModalProps) {
  const [date, setDate] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const { createBooking, loading, error } = useBookingStore();
  const { user } = useAuthStore();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-payment-intent`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          experienceId: experience.id,
          numberOfPeople,
          totalAmount: experience.price * numberOfPeople,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }

      const { clientSecret: secret, error: paymentError } = await response.json();

      if (paymentError) {
        throw new Error(paymentError);
      }

      setClientSecret(secret);
      setPaymentError(null);
    } catch (err) {
      setPaymentError(err instanceof Error ? err.message : 'Failed to process payment');
      console.error('Error creating payment intent:', err);
    }
  };

  const handlePaymentSuccess = async () => {
    if (!user) return;

    try {
      await createBooking({
        experienceId: experience.id,
        userId: user.id,
        date,
        numberOfPeople,
        totalPrice: experience.price * numberOfPeople,
      });

      if (!error) {
        onClose();
      }
    } catch (err) {
      setPaymentError(err instanceof Error ? err.message : 'Failed to create booking');
    }
  };

  const handlePaymentError = (error: string) => {
    setPaymentError(error);
    setClientSecret(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-6">Book Experience</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">{experience.title}</h3>
          <p className="text-gray-600">{experience.location}</p>
          <p className="text-orange-600 font-semibold">€{experience.price} / person</p>
        </div>

        {!clientSecret ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={format(new Date(), 'yyyy-MM-dd')}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Number of People
              </label>
              <input
                type="number"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(parseInt(e.target.value, 10))}
                min="1"
                max={experience.capacity}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-6">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total Price:</span>
                <span>€{experience.price * numberOfPeople}</span>
              </div>
            </div>
            {(error || paymentError) && (
              <div className="mb-4 text-red-500 text-sm">{error || paymentError}</div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Proceed to Payment'}
            </button>
          </form>
        ) : (
          <PaymentForm
            clientSecret={clientSecret}
            onSuccess={handlePaymentSuccess}
            onError={handlePaymentError}
          />
        )}
      </div>
    </div>
  );
}