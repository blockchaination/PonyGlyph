import create from 'zustand';
import { supabase } from '../lib/supabase';

interface AvailabilitySchedule {
  id: string;
  experience_id: string;
  start_date: string;
  end_date: string;
  days_of_week: number[];
  start_time: string;
  end_time: string;
  max_bookings: number;
}

interface BlockedDate {
  id: string;
  experience_id: string;
  date: string;
  reason?: string;
}

interface AvailabilityStore {
  schedules: AvailabilitySchedule[];
  blockedDates: BlockedDate[];
  loading: boolean;
  error: string | null;
  fetchAvailability: (experienceId: string) => Promise<void>;
  createSchedule: (schedule: Omit<AvailabilitySchedule, 'id'>) => Promise<void>;
  updateSchedule: (id: string, schedule: Partial<AvailabilitySchedule>) => Promise<void>;
  deleteSchedule: (id: string) => Promise<void>;
  blockDate: (blockedDate: Omit<BlockedDate, 'id'>) => Promise<void>;
  unblockDate: (id: string) => Promise<void>;
}

export const useAvailabilityStore = create<AvailabilityStore>((set, get) => ({
  schedules: [],
  blockedDates: [],
  loading: false,
  error: null,

  fetchAvailability: async (experienceId: string) => {
    set({ loading: true, error: null });
    try {
      // Fetch schedules
      const { data: schedules, error: schedulesError } = await supabase
        .from('availability_schedules')
        .select('*')
        .eq('experience_id', experienceId);

      if (schedulesError) throw schedulesError;

      // Fetch blocked dates
      const { data: blockedDates, error: blockedError } = await supabase
        .from('blocked_dates')
        .select('*')
        .eq('experience_id', experienceId);

      if (blockedError) throw blockedError;

      set({ 
        schedules: schedules as AvailabilitySchedule[], 
        blockedDates: blockedDates as BlockedDate[],
        error: null 
      });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to fetch availability' });
    } finally {
      set({ loading: false });
    }
  },

  createSchedule: async (schedule) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('availability_schedules')
        .insert([schedule])
        .select()
        .single();

      if (error) throw error;

      const schedules = get().schedules;
      set({ schedules: [...schedules, data as AvailabilitySchedule] });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to create schedule' });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  updateSchedule: async (id, schedule) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('availability_schedules')
        .update(schedule)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      const schedules = get().schedules.map(s =>
        s.id === id ? { ...s, ...data } as AvailabilitySchedule : s
      );
      set({ schedules });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to update schedule' });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  deleteSchedule: async (id) => {
    set({ loading: true, error: null });
    try {
      const { error } = await supabase
        .from('availability_schedules')
        .delete()
        .eq('id', id);

      if (error) throw error;

      const schedules = get().schedules.filter(s => s.id !== id);
      set({ schedules });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to delete schedule' });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  blockDate: async (blockedDate) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('blocked_dates')
        .insert([blockedDate])
        .select()
        .single();

      if (error) throw error;

      const blockedDates = get().blockedDates;
      set({ blockedDates: [...blockedDates, data as BlockedDate] });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to block date' });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  unblockDate: async (id) => {
    set({ loading: true, error: null });
    try {
      const { error } = await supabase
        .from('blocked_dates')
        .delete()
        .eq('id', id);

      if (error) throw error;

      const blockedDates = get().blockedDates.filter(d => d.id !== id);
      set({ blockedDates });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to unblock date' });
      throw error;
    } finally {
      set({ loading: false });
    }
  },
}));