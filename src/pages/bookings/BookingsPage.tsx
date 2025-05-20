import React, { useEffect } from 'react';
import { useAuthStore } from '../../stores/authStore';
import { useBookingStore } from '../../stores/bookingStore';
import { format } from 'date-fns';
import { Calendar, Users, MapPin, AlertCircle } from 'lucide-react';

export function BookingsPage() {
  const { user } = useAuthStore();
  const { bookings, loading, error, fetchUserBookings, cancelBooking } = useBookingStore();

  useEffect(() => {
    if (user) {
      fetchUserBookings(user.id);
    }
  }, [user, fetchUserBookings]);

  const handleCancelBooking = async (bookingId: string) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      await cancelBooking(bookingId);
    }
  };

  if (!user) {
    return (
      <div className="pt-20 px-6 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">Please sign in to view your bookings.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Bookings</h1>

        {loading ? (
          <div className="text-center">
            <p className="text-gray-600">Loading bookings...</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-600">
            <AlertCircle className="h-8 w-8 mx-auto mb-2" />
            <p>{error}</p>
          </div>
        ) : bookings.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600">You don't have any bookings yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-lg shadow-sm border p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {booking.experience.title}
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{format(new Date(booking.bookingDate), 'PPP')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{booking.numberOfPeople} people</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{booking.experience.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="text-lg font-semibold">
                      €{booking.totalPrice.toFixed(2)}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm ${
                      booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </div>
                    {booking.status === 'pending' && (
                      <button
                        onClick={() => handleCancelBooking(booking.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Cancel Booking
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}