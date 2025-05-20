import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.replace(/\/$/, ''); // Remove trailing slash if present
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Supabase URL and Anon Key are required. Please check your .env file.'
  );
}

// Wrap creation in try-catch to handle initialization errors
let supabase;
try {
  supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      storageKey: 'ponyglyph_auth_token',
      storage: window.localStorage
    }
  });
} catch (error) {
  console.error('Failed to initialize Supabase client:', error);
  throw error;
}

// Set up auth state listener
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN') {
    console.log('User signed in:', session?.user?.email);
  } else if (event === 'SIGNED_OUT') {
    console.log('User signed out');
    // Clear any cached user data if needed
    window.localStorage.removeItem('ponyglyph_user_profile');
  } else if (event === 'TOKEN_REFRESHED') {
    console.log('Auth token refreshed');
  }
});

export { supabase };