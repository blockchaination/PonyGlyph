import create from 'zustand';
import { supabase } from '../lib/supabase';

interface UserProfile {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  dateOfBirth: string;
}

interface User {
  id: string;
  email: string;
  profile?: UserProfile;
  emailConfirmed?: boolean;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, profile: UserProfile) => Promise<string>;
  signOut: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  error: null,

  checkAuth: async () => {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error('Session check error:', error.message);
        return;
      }
      
      if (session?.user) {
        // Fetch user profile
        const { data: profile, error: profileError } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('user_id', session.user.id)
          .single();

        if (profileError) {
          console.error('Profile fetch error:', profileError.message);
        }

        set({
          user: {
            id: session.user.id,
            email: session.user.email!,
            emailConfirmed: session.user.email_confirmed_at != null,
            profile: profile ? {
              firstName: profile.first_name,
              lastName: profile.last_name,
              phoneNumber: profile.phone_number,
              dateOfBirth: profile.date_of_birth,
            } : undefined,
          },
        });
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
    } finally {
      set({ loading: false });
    }
  },

  signIn: async (email: string, password: string) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        if (error.message === 'Email not confirmed') {
          throw new Error('Please check your email to confirm your account before signing in.');
        }
        if (error.message === 'Invalid login credentials') {
          throw new Error('Invalid email or password. Please try again.');
        }
        throw error;
      }

      if (!data.user) {
        throw new Error('No user data returned');
      }

      // Fetch user profile
      const { data: profile, error: profileError } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', data.user.id)
        .single();

      if (profileError) {
        console.error('Profile fetch error:', profileError.message);
      }

      set({
        user: {
          id: data.user.id,
          email: data.user.email!,
          emailConfirmed: data.user.email_confirmed_at != null,
          profile: profile ? {
            firstName: profile.first_name,
            lastName: profile.last_name,
            phoneNumber: profile.phone_number,
            dateOfBirth: profile.date_of_birth,
          } : undefined,
        },
        error: null,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to sign in';
      set({ error: message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  signUp: async (email: string, password: string, profile: UserProfile) => {
    set({ loading: true, error: null });
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: profile.firstName,
            last_name: profile.lastName,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      
      if (signUpError) throw signUpError;
      if (!data.user) throw new Error('User registration failed');

      // Create user profile
      const { error: profileError } = await supabase
        .from('user_profiles')
        .insert([
          {
            user_id: data.user.id,
            first_name: profile.firstName,
            last_name: profile.lastName,
            phone_number: profile.phoneNumber,
            date_of_birth: profile.dateOfBirth,
          },
        ]);

      if (profileError) {
        await supabase.auth.signOut();
        throw new Error('Failed to create user profile');
      }

      // Don't set the user in state yet - they need to confirm their email
      set({
        user: null,
        error: null,
      });

      // Return success message
      return "Please check your email to confirm your account.";
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to sign up';
      set({ error: message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  signOut: async () => {
    set({ loading: true, error: null });
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      set({ user: null, error: null });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to sign out';
      set({ error: message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },
}));