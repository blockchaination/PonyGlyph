/*
  # Update experiences table for Moroccan experiences

  1. Changes
    - Add new columns with appropriate defaults
    - Update existing data with default values
    - Make columns NOT NULL after data is updated
    - Add new Moroccan experiences

  2. Security
    - Maintain existing RLS policies
*/

-- First add columns as nullable
ALTER TABLE experiences 
  ADD COLUMN IF NOT EXISTS region text,
  ADD COLUMN IF NOT EXISTS languages text[] DEFAULT '{English}',
  ADD COLUMN IF NOT EXISTS difficulty_level text DEFAULT 'moderate',
  ADD COLUMN IF NOT EXISTS included text[] DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS excluded text[] DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS meeting_point jsonb DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS cancellation_policy text DEFAULT 'Flexible - Full refund up to 24 hours before the experience';

-- Update any existing records with default values
UPDATE experiences 
SET 
  region = 'Marrakech-Safi',
  languages = '{English}',
  difficulty_level = 'moderate',
  included = '{}',
  excluded = '{}',
  meeting_point = '{}',
  cancellation_policy = 'Flexible - Full refund up to 24 hours before the experience'
WHERE region IS NULL;

-- Now make the columns NOT NULL
ALTER TABLE experiences 
  ALTER COLUMN region SET NOT NULL,
  ALTER COLUMN languages SET NOT NULL,
  ALTER COLUMN difficulty_level SET NOT NULL,
  ALTER COLUMN included SET NOT NULL,
  ALTER COLUMN excluded SET NOT NULL,
  ALTER COLUMN meeting_point SET NOT NULL,
  ALTER COLUMN cancellation_policy SET NOT NULL;

-- Delete existing sample data
DELETE FROM experiences;

-- Insert new Moroccan experiences
INSERT INTO experiences (
  title,
  description,
  location,
  region,
  price,
  imageUrl,
  duration,
  capacity,
  rating,
  guideId,
  guideName,
  categories,
  languages,
  difficulty_level,
  included,
  excluded,
  meeting_point,
  cancellation_policy
) VALUES
(
  'Sahara Desert Adventure',
  'Experience the magic of the Sahara Desert with a traditional camel trek, overnight stay in a luxury desert camp, and stunning sunrise views over the golden dunes.',
  'Merzouga, Morocco',
  'Drâa-Tafilalet',
  149.99,
  'https://images.unsplash.com/photo-1548710707-a3426c9f3f96',
  '2 days',
  12,
  4.9,
  auth.uid(),
  'Hassan Amiri',
  ARRAY['desert', 'adventure', 'culture'],
  ARRAY['English', 'French', 'Arabic'],
  'moderate',
  ARRAY['Camel trek', 'Luxury camp accommodation', 'Traditional dinner', 'Breakfast', 'Local guide', 'Water'],
  ARRAY['Travel insurance', 'Personal expenses', 'Tips'],
  '{"latitude": 31.157181, "longitude": -4.022664, "address": "Merzouga Luxury Desert Camp"}',
  'Moderate - 80% refund up to 48 hours before the experience'
),
(
  'Atlas Mountains Trek',
  'Discover the breathtaking High Atlas Mountains with a guided trek through traditional Berber villages, enjoying local hospitality and stunning mountain vistas.',
  'Imlil, Morocco',
  'Marrakech-Safi',
  89.99,
  'https://images.unsplash.com/photo-1489493887464-892be6d1daae',
  '8 hours',
  8,
  4.8,
  auth.uid(),
  'Omar Benali',
  ARRAY['hiking', 'nature', 'culture'],
  ARRAY['English', 'French', 'Arabic', 'Berber'],
  'challenging',
  ARRAY['Professional guide', 'Lunch in Berber house', 'Tea ceremony', 'Water', 'Snacks'],
  ARRAY['Hiking gear', 'Travel insurance', 'Personal expenses'],
  '{"latitude": 31.135815, "longitude": -7.919560, "address": "Imlil Village Center"}',
  'Strict - 50% refund up to 72 hours before the experience'
),
(
  'Fes Medina Food Tour',
  'Explore the culinary treasures of Fes Medina with a local food expert. Sample traditional Moroccan dishes, visit local markets, and learn about spices and cooking techniques.',
  'Fes, Morocco',
  'Fès-Meknès',
  65.00,
  'https://images.unsplash.com/photo-1531837763904-5d3f4987d3f3',
  '4 hours',
  10,
  4.7,
  auth.uid(),
  'Fatima Zahra',
  ARRAY['food', 'culture', 'walking'],
  ARRAY['English', 'French', 'Arabic'],
  'easy',
  ARRAY['All food tastings', 'Local guide', 'Bottled water', 'Tea ceremony'],
  ARRAY['Additional food purchases', 'Personal expenses'],
  '{"latitude": 34.033333, "longitude": -5.000000, "address": "Bab Boujloud (Blue Gate)"}',
  'Flexible - Full refund up to 24 hours before the experience'
);