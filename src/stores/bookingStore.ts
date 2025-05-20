import create from 'zustand';
import { supabase } from '../lib/supabase';

interface Booking {
  id: string;
  experienceId: string;
  userId: string;
  bookingDate: string;
  numberOfPeople: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

interface BookingStore {
  bookings: Booking[];
  loading: boolean;
  error: string | null;
  createBooking: (booking: Omit<Booking, 'id' | 'status' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  fetchUserBookings: (userId: string) => Promise<void>;
  cancelBooking: (bookingId: string) => Promise<void>;
}

export const useBookingStore = create<BookingStore>((set, get) => ({
  bookings: [],
  loading: false,
  error: null,

  createBooking: async (booking) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('bookings')
        .insert([{
          experience_id: booking.experienceId,
          user_id: booking.userId,
          booking_date: booking.bookingDate,
          number_of_people: booking.numberOfPeople,
          total_price: booking.totalPrice,
          status: 'pending'
        }])
        .select()
        .single();

      if (error) throw error;
      
      const bookings = get().bookings;
      set({ bookings: [...bookings, data as unknown as Booking] });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to create booking' });
    } finally {
      set({ loading: false });
    }
  },

  fetchUserBookings: async (userId) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select(`
          *,
          experience:experiences (
            title,
            imageUrl,
            location,
            price
          )
        `)
        .eq('user_id', userId)
        .order('booking_date', { ascending: true });

      if (error) throw error;
      set({ bookings: data as unknown as Booking[] });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to fetch bookings' });
    } finally {
      set({ loading: false });
    }
  },

  cancelBooking: async (bookingId) => {
    set({ loading: true, error: null });
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ status: 'cancelled' })
        .eq('id', bookingId);

      if (error) throw error;

      const bookings = get().bookings.map(booking =>
        booking.id === bookingId ? { ...booking, status: 'cancelled' } : booking
      );
      set({ bookings });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to cancel booking' });
    } finally {
      set({ loading: false });
    }
  }
}));