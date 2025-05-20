/*
  # Create bookings table and policies

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `experience_id` (uuid, references experiences)
      - `user_id` (uuid, references auth.users)
      - `booking_date` (date)
      - `number_of_people` (integer)
      - `total_price` (numeric)
      - `status` (text, enum: pending, confirmed, cancelled)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `bookings` table
    - Add policies for:
      - Users can read their own bookings
      - Users can create bookings
      - Users can update their own bookings
      - Guides can read bookings for their experiences
*/

-- Create enum type for booking status
CREATE TYPE booking_status AS ENUM ('pending', 'confirmed', 'cancelled');

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  experience_id uuid REFERENCES experiences(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  booking_date date NOT NULL,
  number_of_people integer NOT NULL CHECK (number_of_people > 0),
  total_price numeric NOT NULL CHECK (total_price >= 0),
  status booking_status NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

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

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create index for faster queries
CREATE INDEX bookings_user_id_idx ON bookings(user_id);
CREATE INDEX bookings_experience_id_idx ON bookings(experience_id);
CREATE INDEX bookings_status_idx ON bookings(status);