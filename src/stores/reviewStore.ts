import create from 'zustand';
import { supabase } from '../lib/supabase';

interface Review {
  id: string;
  experience_id: string;
  user_id: string;
  booking_id: string;
  rating: number;
  comment: string;
  photos: string[];
  tags: string[];
  created_at: string;
  updated_at: string;
  user: {
    first_name: string;
    last_name: string;
  };
}

interface ReviewStore {
  reviews: Review[];
  loading: boolean;
  error: string | null;
  fetchReviews: (experienceId: string) => Promise<void>;
  createReview: (review: Omit<Review, 'id' | 'created_at' | 'updated_at' | 'user'>) => Promise<void>;
  updateReview: (id: string, review: Partial<Review>) => Promise<void>;
  deleteReview: (id: string) => Promise<void>;
}

export const useReviewStore = create<ReviewStore>((set, get) => ({
  reviews: [],
  loading: false,
  error: null,

  fetchReviews: async (experienceId: string) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select(`
          *,
          user:user_profiles(first_name, last_name)
        `)
        .eq('experience_id', experienceId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      set({ reviews: data as Review[] });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to fetch reviews' });
    } finally {
      set({ loading: false });
    }
  },

  createReview: async (review) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('reviews')
        .insert([review])
        .select()
        .single();

      if (error) throw error;
      const reviews = get().reviews;
      set({ reviews: [data as Review, ...reviews] });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to create review' });
    } finally {
      set({ loading: false });
    }
  },

  updateReview: async (id, review) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('reviews')
        .update(review)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      const reviews = get().reviews.map(r =>
        r.id === id ? { ...r, ...data } as Review : r
      );
      set({ reviews });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to update review' });
    } finally {
      set({ loading: false });
    }
  },

  deleteReview: async (id) => {
    set({ loading: true, error: null });
    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', id);

      if (error) throw error;
      const reviews = get().reviews.filter(r => r.id !== id);
      set({ reviews });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to delete review' });
    } finally {
      set({ loading: false });
    }
  },
}));