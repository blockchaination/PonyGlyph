/*
  # Update bookings table and policies

  1. Changes
    - Add IF NOT EXISTS checks for all objects
    - Drop and recreate policies to ensure clean state
    - Maintain existing table structure and indexes
    - Ensure safe policy creation
*/

-- Drop existing policies if they exist
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Users can read own bookings" ON bookings;
  DROP POLICY IF EXISTS "Users can create bookings" ON bookings;
  DROP POLICY IF EXISTS "Users can update own bookings" ON bookings;
EXCEPTION
  WHEN undefined_object THEN
    NULL;
END $$;

-- Create policies
CREATE POLICY "Users can read own bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (
    auth.uid() = user_id OR
    EXISTS (
      SELECT 1 FROM experiences
      WHERE experiences.id = bookings.experience_id
      AND experiences.guideid = auth.uid()
    )
  );

CREATE POLICY "Users can create bookings"
  ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create indexes if they don't exist
CREATE INDEX IF NOT EXISTS bookings_user_id_idx ON bookings(user_id);
CREATE INDEX IF NOT EXISTS bookings_experience_id_idx ON bookings(experience_id);
CREATE INDEX IF NOT EXISTS bookings_status_idx ON bookings(status);