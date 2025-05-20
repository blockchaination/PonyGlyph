/*
  # Add Availability Management Tables

  1. New Tables
    - `availability_schedules`
      - `id` (uuid, primary key)
      - `experience_id` (uuid, references experiences)
      - `start_date` (date)
      - `end_date` (date)
      - `days_of_week` (integer[]) - Array of days (0-6, where 0 is Sunday)
      - `start_time` (time)
      - `end_time` (time)
      - `max_bookings` (integer)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `blocked_dates`
      - `id` (uuid, primary key)
      - `experience_id` (uuid, references experiences)
      - `date` (date)
      - `reason` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for guide access
*/

-- Create availability_schedules table
CREATE TABLE IF NOT EXISTS availability_schedules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  experience_id uuid REFERENCES experiences(id) ON DELETE CASCADE,
  start_date date NOT NULL,
  end_date date NOT NULL,
  days_of_week integer[] NOT NULL,
  start_time time NOT NULL,
  end_time time NOT NULL,
  max_bookings integer NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_date_range CHECK (end_date >= start_date),
  CONSTRAINT valid_time_range CHECK (end_time > start_time),
  CONSTRAINT valid_max_bookings CHECK (max_bookings > 0)
);

-- Create blocked_dates table
CREATE TABLE IF NOT EXISTS blocked_dates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  experience_id uuid REFERENCES experiences(id) ON DELETE CASCADE,
  date date NOT NULL,
  reason text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE availability_schedules ENABLE ROW LEVEL SECURITY;
ALTER TABLE blocked_dates ENABLE ROW LEVEL SECURITY;

-- Create policies for availability_schedules
CREATE POLICY "Guides can manage their schedules"
  ON availability_schedules
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM experiences
      WHERE experiences.id = availability_schedules.experience_id
      AND experiences.guideid = auth.uid()
    )
  );

CREATE POLICY "Public can view availability schedules"
  ON availability_schedules
  FOR SELECT
  TO public
  USING (true);

-- Create policies for blocked_dates
CREATE POLICY "Guides can manage blocked dates"
  ON blocked_dates
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM experiences
      WHERE experiences.id = blocked_dates.experience_id
      AND experiences.guideid = auth.uid()
    )
  );

CREATE POLICY "Public can view blocked dates"
  ON blocked_dates
  FOR SELECT
  TO public
  USING (true);

-- Add updated_at trigger for availability_schedules
CREATE TRIGGER update_availability_schedules_updated_at
  BEFORE UPDATE ON availability_schedules
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add indexes for better query performance
CREATE INDEX idx_availability_schedules_experience_id ON availability_schedules(experience_id);
CREATE INDEX idx_availability_schedules_dates ON availability_schedules(start_date, end_date);
CREATE INDEX idx_blocked_dates_experience_id ON blocked_dates(experience_id);
CREATE INDEX idx_blocked_dates_date ON blocked_dates(date);