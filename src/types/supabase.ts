export interface Database {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string;
          user_id: string;
          first_name: string;
          last_name: string;
          phone_number?: string;
          date_of_birth: string;
          created_at?: string;
          updated_at?: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          first_name: string;
          last_name: string;
          phone_number?: string;
          date_of_birth: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          first_name?: string;
          last_name?: string;
          phone_number?: string;
          date_of_birth?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}