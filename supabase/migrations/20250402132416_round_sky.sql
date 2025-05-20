/*
  # Create experiences table

  1. New Tables
    - `experiences`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `location` (text)
      - `price` (numeric)
      - `imageUrl` (text)
      - `duration` (text)
      - `capacity` (integer)
      - `rating` (numeric)
      - `guideId` (uuid, references guides)
      - `guideName` (text)
      - `categories` (text array)
      - `created_at` (timestamp with time zone)

  2. Security
    - Enable RLS on `experiences` table
    - Add policy for authenticated users to read experiences
    - Add policy for guides to manage their own experiences
*/

CREATE TABLE IF NOT EXISTS experiences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  location text NOT NULL,
  price numeric NOT NULL CHECK (price >= 0),
  imageUrl text NOT NULL,
  duration text NOT NULL,
  capacity integer NOT NULL CHECK (capacity > 0),
  rating numeric NOT NULL DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
  guideId uuid REFERENCES auth.users(id),
  guideName text NOT NULL,
  categories text[] NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;

-- Policy for reading experiences (public access)
CREATE POLICY "Experiences are viewable by everyone"
  ON experiences
  FOR SELECT
  TO public
  USING (true);

-- Policy for guides to manage their own experiences
CREATE POLICY "Guides can manage their own experiences"
  ON experiences
  FOR ALL
  TO authenticated
  USING (auth.uid() = guideId)
  WITH CHECK (auth.uid() = guideId);

-- Insert some sample data
INSERT INTO experiences (
  title,
  description,
  location,
  price,
  imageUrl,
  duration,
  capacity,
  rating,
  guideId,
  guideName,
  categories
) VALUES
(
  'Tokyo Street Food Tour',
  'Explore the vibrant street food scene of Tokyo with a local expert.',
  'Tokyo, Japan',
  75.00,
  'https://images.unsplash.com/photo-1554797589-7241bb691973',
  '3 hours',
  8,
  4.8,
  auth.uid(),
  'Tanaka Hiroshi',
  ARRAY['food', 'culture', 'walking']
),
(
  'Ancient Kyoto Temple Walk',
  'Discover the spiritual heart of Japan through Kyoto''s ancient temples.',
  'Kyoto, Japan',
  95.00,
  'https://images.unsplash.com/photo-1545569341-9eb8b30979d9',
  '4 hours',
  10,
  4.9,
  auth.uid(),
  'Yamamoto Keiko',
  ARRAY['culture', 'history', 'walking']
);