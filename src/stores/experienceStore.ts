import create from 'zustand';
import { Experience } from '../types/experience';
import { supabase } from '../lib/supabase';

interface ExperienceStore {
  experiences: Experience[];
  loading: boolean;
  error: string | null;
  fetchExperiences: () => Promise<void>;
  createExperience: (experience: Omit<Experience, 'id' | 'rating'>) => Promise<void>;
  updateExperience: (id: string, experience: Partial<Experience>) => Promise<void>;
  deleteExperience: (id: string) => Promise<void>;
}

export const useExperienceStore = create<ExperienceStore>((set, get) => ({
  experiences: [],
  loading: false,
  error: null,

  fetchExperiences: async () => {
    set({ loading: true, error: null });
    try {
      // Add timeout to prevent hanging requests
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timeout')), 10000)
      );
      
      const fetchPromise = supabase
        .from('experiences')
        .select('*')
        .order('created_at', { ascending: false });

      const { data, error } = await Promise.race([fetchPromise, timeoutPromise]) as any;

      if (error) throw error;
      set({ experiences: data as Experience[], error: null });
    } catch (error) {
      console.error('Error fetching experiences:', error);
      set({ 
        error: error instanceof Error 
          ? `Failed to fetch experiences: ${error.message}` 
          : 'Failed to fetch experiences' 
      });
    } finally {
      set({ loading: false });
    }
  },

  createExperience: async (experience) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('experiences')
        .insert([{ ...experience, rating: 0 }])
        .select()
        .single();

      if (error) throw error;
      
      const experiences = get().experiences;
      set({ experiences: [data as Experience, ...experiences], error: null });
    } catch (error) {
      console.error('Error creating experience:', error);
      set({ error: error instanceof Error ? error.message : 'Failed to create experience' });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  updateExperience: async (id, experience) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('experiences')
        .update(experience)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      const experiences = get().experiences.map(exp =>
        exp.id === id ? { ...exp, ...data } as Experience : exp
      );
      set({ experiences, error: null });
    } catch (error) {
      console.error('Error updating experience:', error);
      set({ error: error instanceof Error ? error.message : 'Failed to update experience' });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  deleteExperience: async (id) => {
    set({ loading: true, error: null });
    try {
      const { error } = await supabase
        .from('experiences')
        .delete()
        .eq('id', id);

      if (error) throw error;

      const experiences = get().experiences.filter(exp => exp.id !== id);
      set({ experiences, error: null });
    } catch (error) {
      console.error('Error deleting experience:', error);
      set({ error: error instanceof Error ? error.message : 'Failed to delete experience' });
      throw error;
    } finally {
      set({ loading: false });
    }
  },
}));